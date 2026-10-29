// 画面とつなぐところ（document に さわるのは このファイルだけ）。
// 分野 → 問題 → 点数 の 画面を 出し、ボタンを 押すと 切りかえる。
var Manners = window.Manners || {};
window.Manners = Manners;

Manners.run = function (root, list, rand, storage, stories) {
  var state = null;
  var mistakes = Manners.loadMistakes(storage);
  var chosen = null;

  function render() {
    if (state === null) {
      root.innerHTML = Manners.homeHtml(list) + Manners.reviewHtml(list, mistakes);
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

  root.addEventListener('click', function (event) {
    var data = event.target.dataset;
    if (data.category) {
      var story = Manners.storyOf(stories, data.category);
      if (story) {
        chosen = data.category;
        root.innerHTML = Manners.introHtml(story, Manners.byCategory(list, data.category).length);
      } else {
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
      Manners.next(state);
      if (Manners.isDone(state)) {
        root.innerHTML = Manners.resultHtml(state.right, state.items.length);
      } else {
        render();
      }
    } else if (data.action === 'home') {
      state = null;
      render();
    } else if (data.action === 'review') {
      state = Manners.startReview(list, mistakes, rand);
      render();
    } else if (data.action === 'begin') {
      state = Manners.startStory(list, chosen);
      render();
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
Manners.run(document.getElementById('app'), Manners.questions, Math.random, Manners.storage(), Manners.stories);
