// 分野の まとまり（はじめの 画面で 分野を まとまりごとに 並べる）。新しい 分野は どこかの categories に 足す。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.groups = [
  { name: 'しごと', categories: ['職場', '会議', '電話とメール', '訪問'] },
  { name: 'くらし', categories: ['食事', '冠婚葬祭', '贈り物', '近所づきあい', '病院'] },
  { name: 'まちで', categories: ['公共の場', 'お店', 'エレベーター', '図書館', '美術館', '映画館', 'カフェ', '公園'] },
  { name: '旅とあそび', categories: ['温泉旅館', '飛行機', 'お祭り', 'スポーツ観戦', 'プール', 'キャンプ場', '動物園', '海水浴'] }
];
