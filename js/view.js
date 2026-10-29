// 画面に出す HTML の文字を 作るところ（画面には さわらない）。
// 関数は  Manners.名前 = function (…) { … };  の形で、この下に足していく。
var Manners = window.Manners || {};
window.Manners = Manners;

Manners.escapeHtml = function (text) {
  return text.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#39;');
};

Manners.questionHtml = function (question, n, total) {
  var html = '<p class="count">' + n + ' / ' + total + '</p>' + Manners.progressHtml(n, total);
  html += '<h2 class="question">' + Manners.escapeHtml(question.question) + '</h2>';
  html += '<div class="choices">';
  for (var i = 0; i < question.choices.length; i++) {
    html += '<button class="choice" data-choice="' + i + '">' + Manners.escapeHtml(question.choices[i]) + '</button>';
  }
  html += '</div>';
  return html;
};

Manners.feedbackHtml = function (question, choice) {
  var html = '';
  if (Manners.isCorrect(question, choice)) {
    html += '<p class="ok">○ 正解</p>';
  } else {
    html += '<p class="ng">× ざんねん。正しいのは「' + Manners.escapeHtml(question.choices[question.answer]) + '」</p>';
  }
  html += '<p class="explain">' + Manners.escapeHtml(question.explain) + '</p>';
  html += '<button class="next" data-action="next">つぎへ</button>';
  return html;
};

Manners.resultHtml = function (right, total) {
  var html = '<h2 class="result">' + total + '問中' + right + '問 正解</h2>';
html += '<p class="percent">正解率 ' + Manners.percentOf(right, total) + '%</p>';
  html += '<p class="comment">';
  if (right === total) {
    html += 'すばらしい。全問正解です。';
  } else if (right / total >= 0.6) {
    html += 'よくできました。まちがえた問題を見直しましょう。';
  } else {
    html += 'もう一度やってみましょう。';
  }
  html += '</p>';
  html += '<p class="rank">段位: ' + Manners.rankOf(right, total) + '</p>';
  if (Manners.toNextRank(right, total) > 0) {
    html += '<p class="next-rank">次の 段位まで あと ' + Manners.toNextRank(right, total) + ' 問</p>';
  }
  html += '<button class="next" data-action="home">分野を選ぶ</button>';
  return html;
};

Manners.homeHtml = function (list) {
  var html = '<p class="lead">分野を選んでください。</p>';
  html += '<div class="categories">';
  var categories = Manners.categories(list);
  for (var i = 0; i < categories.length; i++) {
    var name = categories[i];
    var escapedName = Manners.escapeHtml(name);
    var count = Manners.byCategory(list, name).length;
    html += '<button class="category" data-category="' + escapedName + '">' + escapedName + '（' + count + '問）</button>';
  }
  html += '</div>';
  return html;
};

Manners.reviewHtml = function (list, mistakes) {
  var count = Manners.byIds(list, mistakes).length;
  if (count === 0) {
    return '';
  }
  return '<button class="review" data-action="review">まちがえた問題を もう一度（' + count + '問）</button>';
};


Manners.artHtml = function (key) {
  if (!Manners.art || !key || !Manners.art[key]) {
    return '';
  }
  return '<div class="art">' + Manners.art[key] + '</div>';
};

Manners.sceneHtml = function (question) {
  if (!question.scene) {
    return '';
  }
  return Manners.artHtml(question.art) + '<p class="scene">' + Manners.escapeHtml(question.scene) + '</p>';
};

Manners.senseiHtml = function (ok) {
  var message = ok ? 'おみごと。' : 'おしい。ここで 覚えよう。';
  return '<div class="sensei">' + Manners.artHtml('sensei') + '<p class="say">' + message + '</p></div>';
};

Manners.introHtml = function (story, count) {
  return '<div class="intro">' + Manners.artHtml(story.art) + '<h2 class="title">' + Manners.escapeHtml(story.title) + '</h2><p class="story">' + Manners.escapeHtml(story.intro) + '</p><button class="next" data-action="begin">はじめる（' + count + '問）</button></div>';
};

Manners.progressHtml = function (n, total) {
  var width = 0;
  if (total > 0) {
    width = Math.round((n / total) * 100);
    if (width < 0) width = 0;
    if (width > 100) width = 100;
  }
  return '<div class="progress"><div class="bar" style="width: ' + width + '%"></div></div>';
};
