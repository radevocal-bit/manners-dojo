// 贈り物の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '贈り物',
  title: 'はじめての 手みやげ',
  intro: '友だちの 家に 招かれました。手みやげを 持って 行きます。',
  art: 'gift'
});

Manners.questions.push(
  {
    id: 'okuri-1',
    category: '贈り物',
    scene: '友だちの 家の 玄関で あいさつを した。手に 手みやげを 持って いる。',
    art: 'gift',
    question: 'いつ わたす？',
    choices: ['玄関に 入る 前に 押しつける', '部屋に 通されて あいさつを してから わたす', '帰る ときに だまって 置いて いく'],
    answer: 1,
    explain: '部屋で 落ち着いて から わたすと、ていねいです。'
  },
  {
    id: 'okuri-2',
    category: '贈り物',
    scene: '手みやげは 紙袋に 入って いる。',
    art: 'gift',
    question: 'わたす ときは？',
    choices: ['紙袋から 出して わたす', '紙袋ごと 投げる ように わたす', '紙袋に 入れた まま 床に 置く'],
    answer: 0,
    explain: '紙袋は 持ち運ぶ ための 物です。品物を 出して、相手に 向けて わたします。'
  },
  {
    id: 'okuri-3',
    category: '贈り物',
    scene: '手みやげを わたす。',
    art: 'gift',
    question: 'どう わたす？',
    choices: ['片手で さっと わたす', '品物の 正面を 自分に 向けて わたす', '品物の 正面を 相手に 向けて 両手で わたす'],
    answer: 2,
    explain: '相手が すぐ 見られる 向きで、両手で ていねいに わたします。'
  },
  {
    id: 'okuri-4',
    category: '贈り物',
    scene: '手みやげを わたす とき、ひとこと 言う。',
    art: 'gift',
    question: '何と 言う？',
    choices: ['「お口に 合えば うれしいです」', '「高かったんですよ」', '何も 言わない'],
    answer: 0,
    explain: '相手の ことを 考えた ひとことで、気持ちが 伝わります。'
  },
  {
    id: 'okuri-5',
    category: '贈り物',
    scene: 'お祝いの 品物を もらった。',
    art: 'gift',
    question: 'お礼は？',
    choices: ['何も しない', '1 年 たって から 言う', 'すぐに お礼を 伝える'],
    answer: 2,
    explain: 'もらった ことと うれしい 気持ちを、早めに 伝えます。'
  },
  {
    id: 'okuri-6',
    category: '贈り物',
    scene: '結婚祝いを もらった。お返しを する。',
    art: 'gift',
    question: 'お返しの 目安は？',
    choices: ['もらった 物の 半分 くらいの 物', 'もらった 物の 3 倍の 物', 'お返しは しない'],
    answer: 0,
    explain: 'お返しは「半返し」が 目安です。高すぎると、相手が 気を 使います。'
  },
  {
    id: 'okuri-7',
    category: '贈り物',
    scene: '招かれた 家には 小さな 子どもが いる。',
    art: 'gift',
    question: '手みやげは？',
    choices: ['お酒 だけに する', 'みんなで 食べられる お菓子に する', '大人 だけが 使う 物に する'],
    answer: 1,
    explain: '家族 みんなが よろこぶ 物を えらびます。'
  },
  {
    id: 'okuri-8',
    category: '贈り物',
    scene: '手みやげを まだ 買って いない。行く 日は 明日だ。',
    art: 'gift',
    question: 'どう する？',
    choices: ['前もって えらんで 用意して おく', '相手の 家の すぐ 近くの 店で 買う', '何も 持たずに 行く'],
    answer: 0,
    explain: '近くの 店の 物だと、間に 合わせに 見えます。前もって えらんだ 物の 方が 気持ちが 伝わります。'
  },
  {
    id: 'okuri-9',
    category: '贈り物',
    scene: 'お世話に なった 人に 品物を 送る。中身は 生の 魚だ。',
    art: 'gift',
    question: '送る 前に？',
    choices: ['だまって 送る', '1 週間 かかる 方法で 送る', '相手が 受け取れる 日を たしかめる'],
    answer: 2,
    explain: '生の 物は 早く 受け取らないと いたみます。'
  },
  {
    id: 'okuri-10',
    category: '贈り物',
    scene: 'プレゼントを もらった。あまり 好きな 物では なかった。',
    art: 'gift',
    question: 'どう する？',
    choices: ['「いらない」と 言う', '気持ちに 感謝して お礼を 言う', '目の 前で ほかの 人に あげる'],
    answer: 1,
    explain: '品物 だけで なく、えらんで くれた 気持ちに お礼を 言います。'
  }
);
