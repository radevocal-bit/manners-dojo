// 画面とつなぐところ（document に さわるのは このファイルだけ）。
// 分野 → 問題 → 点数 の 画面を 出し、ボタンを 押すと 切りかえる。
var Manners = window.Manners || {};
window.Manners = Manners;

Manners.run = function (root, list, rand, storage, stories) {
  var best = Manners.loadBest(storage);
  var state = null;
  var mistakes = Manners.loadMistakes(storage);
  var chosen = null;
  var current = null;

  function render() {
    if (state === null) {
      root.innerHTML = Manners.homeHtml(list) + Manners.suggestHtml(Manners.suggestCategory(list, best)) + Manners.reviewHtml(list, mistakes) + Manners.averageHtml(Manners.averageBest(list, best)) + Manners.bestHtml(list, best);
      return;
    }
    var question = state.items[state.index];
    var html = Manners.sceneHtml(question) + Manners.questionHtml(question, state.index + 1, state.items.length);
    if (state.picked !== null) {
      if (question.scene) {
        html += Manners.senseiHtml(Manners.isCorrect(question, state.picked));
      }
      html += Manners.feedbackHtml(question, state.picked);
    }
    root.innerHTML = html;
  }

  function onNext() {
    Manners.next(state);
    if (Manners.isDone(state)) {
      showResult();
    } else {
      render();
    }
  }

  function showResult() {
    var isNew = false;
    if (current) {
      isNew = Manners.isNewBest(best, current, state.right, state.items.length);
      best = Manners.updateBest(best, current, state.right, state.items.length);
      Manners.saveBest(storage, best);
      current = null;
    }
    root.innerHTML = Manners.resultHtml(state.right, state.items.length, isNew) + Manners.wrongListHtml(Manners.wrongOf(state));
  }

  function onHome() {
    state = null;
    current = null;
    render();
  }

  function onReview() {
    state = Manners.startReview(list, mistakes, rand);
    render();
  }

  function onBegin() {
    state = Manners.startStory(list, chosen);
    current = chosen;
    render();
  }

  root.addEventListener('click', function (event) {
    var data = event.target.dataset;
    if (data.category) {
      var story = Manners.storyOf(stories, data.category);
      if (story) {
        chosen = data.category;
        current = data.category;
        root.innerHTML = Manners.introHtml(story, Manners.byCategory(list, data.category).length);
      } else {
        current = data.category;
        state = Manners.start(list, data.category, rand);
        render();
      }
    } else if (data.choice) {
      Manners.answer(state, Number(data.choice));
      var question = state.items[state.index];
      mistakes = Manners.updateMistakes(mistakes, question.id, Manners.isCorrect(question, state.picked));
      Manners.saveMistakes(storage, mistakes);
      render();
    } else if (data.action === 'next') {
      onNext();
    } else if (data.action === 'home') {
      onHome();
    } else if (data.action === 'review') {
      onReview();
    } else if (data.action === 'begin') {
      onBegin();
    }
  });

  render();
};

Manners.storage = function () {
  try {
    return window.localStorage;
  } catch (e) {
    return null;
  }
};
Manners.run(document.getElementById('app'), Manners.questions, Math.random, Manners.storage(), Manners.stories, {});
