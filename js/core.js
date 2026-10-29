// 計算だけを するところ（画面には さわらない）。
// 関数は  Manners.名前 = function (…) { … };  の形で、この下に足していく。
var Manners = window.Manners || {};
window.Manners = Manners;

Manners.isCorrect = function (question, choice) {
  return question.answer === choice;
};

Manners.categories = function (list) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (result.indexOf(list[i].category) === -1) {
      result.push(list[i].category);
    }
  }
  return result;
};

Manners.byCategory = function (list, category) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].category === category) {
      result.push(list[i]);
    }
  }
  return result;
};

Manners.shuffle = function (list, rand) {
  const copy = list.slice();
  const r = rand || Math.random;
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
};


Manners.start = function (list, category, rand) {
  return {
    items: Manners.shuffle(Manners.byCategory(list, category), rand),
    index: 0,
    right: 0,
    picked: null
  };
};

Manners.answer = function (state, choice) {
  if (state.picked !== null) return;
  state.picked = choice;
  if (Manners.isCorrect(state.items[state.index], choice)) {
    state.right++;
  }
};

Manners.next = function (state) {
  state.index++;
  state.picked = null;
};

Manners.isDone = function (state) {
  return state.index >= state.items.length;
};

Manners.updateMistakes = function (ids, id, ok) {
  const newIds = ids.filter(i => i !== id);
  if (!ok) {
    newIds.push(id);
  }
  return newIds;
};


Manners.loadMistakes = function (storage) {
  try {
    const data = storage ? storage.getItem('manners.mistakes') : null;
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
};

Manners.saveMistakes = function (storage, ids) {
  try {
    storage.setItem('manners.mistakes', JSON.stringify(ids));
  } catch (e) {}
};

Manners.byIds = function (list, ids) {
  return list.filter(item => ids.includes(item.id));
};

Manners.startReview = function (list, ids, rand) {
  return {
    items: Manners.shuffle(Manners.byIds(list, ids), rand),
    index: 0,
    right: 0,
    picked: null
  };
};

Manners.storyOf = function (stories, category) {
  if (!stories) return null;
  for (let i = 0; i < stories.length; i++) {
    if (stories[i].category === category) {
      return stories[i];
    }
  }
  return null;
};

Manners.startStory = function (list, category) {
  return {
    items: Manners.byCategory(list, category),
    index: 0,
    right: 0,
    picked: null
  };
};

Manners.rankOf = function (right, total) {
  if (total <= 0) return '見習い';
  if (right > total) right = total;
  if (right < 0) right = 0;
  if (right === total) return '師範代';
  var ratio = right / total;
  if (ratio >= 0.8) return '三段';
  if (ratio >= 0.6) return '二段';
  if (ratio >= 0.4) return '初段';
  return '見習い';
};


Manners.toNextRank = function (right, total) {
  if (total <= 0) return 0;
  if (right < 0) right = 0;
  if (right > total) right = total;
  var currentRank = Manners.rankOf(right, total);
  if (currentRank === '師範代') return 0;
  var nextThreshold;
  if (currentRank === '三段') {
    nextThreshold = 1.0;
  } else if (currentRank === '二段') {
    nextThreshold = 0.8;
  } else if (currentRank === '初段') {
    nextThreshold = 0.6;
  } else {
    nextThreshold = 0.4;
  }
  var needed = Math.ceil(nextThreshold * total - right);
  return needed > 0 ? needed : 0;
};

