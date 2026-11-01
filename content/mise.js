// お店の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: 'お店',
  title: '週末の買い物',
  intro: '今日は休みの日。近くのお店へ買い物に行きます。',
  art: 'shop'
});

Manners.questions.push(
  {
    id: 'mise-1',
    category: 'お店',
    scene: 'レジに人が並んでいる。',
    art: 'shop',
    question: 'どうする？',
    choices: ['列のうしろに並ぶ', 'すいている前の方に入る', '知り合いの横に入れてもらう'],
    answer: 0,
    explain: '先に待っている人がいます。列のうしろに並んで順番を待ちます。'
  },
  {
    id: 'mise-2',
    category: 'お店',
    scene: 'かごに入れた品物を、やっぱり買わないことにした。',
    art: 'shop',
    question: '品物はどうする？',
    choices: ['近くの棚に置いていく', 'もとの場所にもどす', 'かごに入れたまま置いて帰る'],
    answer: 1,
    explain: 'ほかの人がさがせるように、品物はもとの場所にもどします。'
  },
  {
    id: 'mise-3',
    category: 'お店',
    scene: 'レジでお金をはらう。小さなトレーが置いてある。',
    art: 'shop',
    question: 'お金はどうわたす？',
    choices: ['トレーに置く', '店員さんの手にむりににぎらせる', 'カウンターに投げるように置く'],
    answer: 0,
    explain: 'お店の人が数えやすく、まちがいもへります。'
  },
  {
    id: 'mise-4',
    category: 'お店',
    scene: '品物とおつりを受け取った。',
    art: 'shop',
    question: '店を出るときは？',
    choices: ['だまって出る', 'スマホを見ながら出る', '「ありがとう」とひとこと言う'],
    answer: 2,
    explain: 'ひとことで、お店の人も自分も気持ちよくなります。'
  },
  {
    id: 'mise-5',
    category: 'お店',
    scene: 'お店で試食をすすめられた。',
    art: 'shop',
    question: 'どうする？',
    choices: ['何回も取る', '1つだけいただく', '家族の分も持ち帰る'],
    answer: 1,
    explain: '試食は味を知るための物です。1つだけにします。'
  },
  {
    id: 'mise-6',
    category: 'お店',
    scene: '服のお店で試着室を使う。',
    art: 'shop',
    question: '入るときは？',
    choices: ['くつをぬいで入る', 'くつのまま入る', 'カーテンを開けたまま着がえる'],
    answer: 0,
    explain: '試着室の床をよごさないように、くつをぬいで入ります。'
  },
  {
    id: 'mise-7',
    category: 'お店',
    scene: 'のどがかわいた。かごにジュースを入れている。',
    art: 'shop',
    question: 'いつ飲む？',
    choices: ['かごの中ですぐ開けて飲む', 'レジで買ってから飲む', '少しだけ飲んで棚にもどす'],
    answer: 1,
    explain: 'お金をはらう前の品物は、まだお店の物です。'
  },
  {
    id: 'mise-8',
    category: 'お店',
    scene: 'カフェで飲み物を飲み終わった。お店が混んできた。',
    art: 'shop',
    question: 'どうする？',
    choices: ['何時間でも座っている', 'となりの席に荷物を置いて広く使う', '早めに席を立つ'],
    answer: 2,
    explain: '席を待っている人がいます。飲み終わったら早めに席をゆずります。'
  },
  {
    id: 'mise-9',
    category: 'お店',
    scene: 'レストランで注文をしたい。',
    art: 'shop',
    question: '店員さんをどう呼ぶ？',
    choices: ['大きな声で何度も呼ぶ', '手を挙げて「すみません」と言う', 'テーブルをたたいて知らせる'],
    answer: 1,
    explain: '手を挙げて静かに呼ぶと、まわりの人のじゃまになりません。'
  },
  {
    id: 'mise-10',
    category: 'お店',
    scene: 'レジの列に並んでいる。もうすぐ自分の番。',
    art: 'shop',
    question: 'そのあいだに？',
    choices: ['お財布やカードを用意しておく', '番が来てからかばんをさがす', 'スマホでゲームをして待つ'],
    answer: 0,
    explain: '支払いがはやくすみ、うしろの人を待たせません。'
  }
);
