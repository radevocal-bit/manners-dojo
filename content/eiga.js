// 映画館の マナー。
var Manners = window.Manners || {};
window.Manners = Manners;
Manners.questions = Manners.questions || [];
Manners.stories = Manners.stories || [];

Manners.stories.push({
  category: '映画館',
  title: '週末の 映画',
  intro: '友だちと 映画を 見に 来ました。',
  art: 'cinema'
});

Manners.questions.push(
  {
    id: 'eiga-1',
    category: '映画館',
    scene: '上映が はじまる 前に、席に 着いた。',
    art: 'cinema',
    question: 'スマホは？',
    choices: ['音を 出した まま 置く', '電源を 切るか マナーモードに する', '光る まま 手に 持つ'],
    answer: 1,
    explain: '音や 光は ほかの 人の じゃまに なります。上映の 前に、音と 光が 出ない ように します。'
  },
  {
    id: 'eiga-2',
    category: '映画館',
    scene: '映画が はじまった。となりの 友だちに 感想を 言いたい。',
    art: 'cinema',
    question: '感想は？',
    choices: ['すぐ 声に 出して 言う', 'スマホで 送る', '見終わってから 話す'],
    answer: 2,
    explain: '上映中の 声は まわりの 人に 聞こえます。感想は 見終わってから 話します。'
  },
  {
    id: 'eiga-3',
    category: '映画館',
    scene: '足を 組んだら、前の 席に 足が あたりそうだ。',
    art: 'cinema',
    question: '足は？',
    choices: ['前の 席に あたらない ように 足を おろす', '前の 席に のせる', '通路に 大きく 出す'],
    answer: 0,
    explain: '前の 席を けったり 押したり すると、前の 人が 落ち着いて 見られません。'
  },
  {
    id: 'eiga-4',
    category: '映画館',
    scene: '上映中に トイレに 行きたく なった。席は 列の まん中だ。',
    art: 'cinema',
    question: 'どう する？',
    choices: ['だまって 人の 足を またいで 通る', '大きな 音で 立ち上がって 走る', '体を 低く して、「すみません」と 小さく 言って 通る'],
    answer: 2,
    explain: '前を 通る ときは、画面を さえぎらない ように 体を 低く して、小さな 声で ことわります。'
  },
  {
    id: 'eiga-5',
    category: '映画館',
    scene: 'ポップコーンを 買って 席に もどった。',
    art: 'cinema',
    question: '食べる ときは？',
    choices: ['音を 立てない ように 静かに 食べる', '袋を 何度も ガサガサ 鳴らす', 'こぼれても そのままに する'],
    answer: 0,
    explain: '食べる 音や 袋の 音は、静かな 場面で よく ひびきます。'
  },
  {
    id: 'eiga-6',
    category: '映画館',
    scene: '映画に おくれて 着いた。もう はじまって いる。',
    art: 'cinema',
    question: '席へ 行く ときは？',
    choices: ['スマホの 明かりで 足もとを 大きく 照らす', '係の 人の 案内に したがって 静かに 進む', '大きな 声で 友だちを 呼ぶ'],
    answer: 1,
    explain: '暗い 中の 明かりや 声は 目立ちます。係の 人に 案内して もらい、静かに 席に 着きます。'
  },
  {
    id: 'eiga-7',
    category: '映画館',
    scene: 'まだ 映画を 見て いない 友だちに 会った。',
    art: 'cinema',
    question: '話す ときは？',
    choices: ['結末を 話して しまう', 'SNS に 結末を 書く', '結末は 言わずに おく'],
    answer: 2,
    explain: '先に 結末を 知ると、見る 楽しみが へります。見て いない 人には 話しません。'
  },
  {
    id: 'eiga-8',
    category: '映画館',
    scene: 'となりの 人との 間に ひじかけが 1 つ ある。',
    art: 'cinema',
    question: 'ひじかけは？',
    choices: ['両方とも 自分が 使う', 'となりの 人と ゆずりあう', 'かばんを 置く'],
    answer: 1,
    explain: 'ひじかけは となりの 人と いっしょに 使う 物です。ゆずりあって 使います。'
  },
  {
    id: 'eiga-9',
    category: '映画館',
    scene: 'エンドロールが はじまった。まだ 見て いる 人が 多い。',
    art: 'cinema',
    question: '帰る ときは？',
    choices: ['明るく なるまで 待つか、低い 姿勢で 静かに 出る', 'すぐ 立って 画面の 前を 通る', '大きな 声で 感想を 話しながら 出る'],
    answer: 0,
    explain: 'さいごまで 見たい 人も います。じゃまを しない ように、静かに 出ます。'
  },
  {
    id: 'eiga-10',
    category: '映画館',
    scene: '見終わった。足もとに ポップコーンの 入れ物と 飲み物の カップが ある。',
    art: 'cinema',
    question: '帰る 前に？',
    choices: ['席に 置いた まま 帰る', '床に 置いて 帰る', '自分で 持って 出て、決められた 所に 捨てる'],
    answer: 2,
    explain: '次の 回の 人が 気持ち よく 使える ように、ごみは 持って 出ます。'
  }
);
