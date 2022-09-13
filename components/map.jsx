// SPDX-License-Identifier: CC-BY-NC-4.0

export const MAPS = [
  {
    id: "asano",
    name: "浅野学園",
    alt: "",
    maps: [
      { id: "main-f1", x: 66, y: 29 },
      { id: "jhs-f1", x: 56, y: 38 },
      { id: "hs-f1", x: 79, y: 32 },
      { id: "library", x: 57, y: 18 },
      { id: "arena", x: 85, y: 52 },
      { id: "hc-a", x: 36, y: 22 },
      { id: "field", x: 31, y: 51 },
    ],
    orgs: [],
    texts: [
      { text: "正門", x: 98, y: 83 },
      { text: "銅像山", x: 70, y: 85 },
      { text: "浅野ｻﾞ･ﾍﾞｽﾄ投票所", x: 71, y: 35 },
    ],
  },
  {
    id: "main-f1",
    name: "本館１階",
    alt:
      "１階にトイレはありません。階段で２階へ昇ってください。" +
      "本館前には浅野ザ・ベストの投票所があります。",
    maps: [
      { id: "asano", x: 29, y: 73 },
      { id: "main-f2", x: 12, y: 27 },
    ],
    orgs: [],
    texts: [],
  },
  {
    id: "main-f2",
    name: "本館２階",
    alt:
      "職員室の隣の廊下の手前に女子トイレ、奥に男子トイレがあります。" +
      "中学棟２階、高校棟２階と渡り廊下で繋がっています。",
    maps: [
      { id: "main-f1", x: 15, y: 54 },
      { id: "jhs-f2", x: 4, y: 86 },
      { id: "hs-f2", x: 96, y: 86 },
    ],
    orgs: [],
    texts: [],
  },
  {
    id: "jhs-f1",
    name: "中学棟１階",
    alt:
      "生徒ホールには男子トイレがあります。" +
      "資料室の隣の廊下の奥に女子トイレと男子トイレがあります。" +
      "多目的教室はアサノラジオ局のブースです。",
    maps: [
      { id: "asano", x: 79, y: 66 },
      { id: "asano", x: 79, y: 34 },
      { id: "jhs-f2", x: 8, y: 11 },
      { id: "jhs-f2", x: 31, y: 41 },
      { id: "jhs-f2", x: 31, y: 86 },
      { id: "hc-a", x: 17, y: 23 },
      { id: "field", x: 23, y: 26 },
    ],
    orgs: [{ id: "ryosui", x: 50, y: 50 }],
    texts: [],
  },
  {
    id: "jhs-f2",
    name: "中学棟２階",
    alt:
      "講堂の隣に女子トイレがあります。" +
      "講堂の反対側の奥には男子トイレと女子トイレがあります。" +
      "講堂の前の廊下は本館２階と渡り廊下で繋がっています。",
    maps: [
      { id: "main-f2", x: 79, y: 30 },
      { id: "jhs-f1", x: 8, y: 18 },
      { id: "jhs-f1", x: 31, y: 46 },
      { id: "jhs-f1", x: 31, y: 88 },
      { id: "jhs-f3", x: 8, y: 15 },
      { id: "jhs-f3", x: 31, y: 43 },
      { id: "jhs-f3", x: 31, y: 85 },
    ],
    orgs: [
      { id: "jaa-hall", x: 50, y: 50 },
      { id: "kogito", x: 50, y: 50 },
      { id: "melon-frappe", x: 50, y: 50 },
      { id: "adu-hall", x: 50, y: 50 },
      { id: "pta-bazaar", x: 50, y: 50 },
    ],
    texts: [],
  },
  {
    id: "jhs-f3",
    name: "中学棟３階",
    alt:
      "中央に男子トイレがあります。清話書林と渡り廊下で繋がっています。" +
      "その渡り廊下の前に、スタンプラリー景品交換所があります。",
    maps: [
      { id: "jhs-f2", x: 10, y: 14 },
      { id: "jhs-f2", x: 27, y: 83 },
      { id: "jhs-f4", x: 10, y: 11 },
      { id: "jhs-f4", x: 27, y: 80 },
      { id: "library", x: 11, y: 1 },
    ],
    orgs: [
      { id: "haunted", x: 50, y: 50 },
      { id: "haunted", x: 50, y: 50 },
      { id: "jhs1st", x: 50, y: 50 },
      { id: "mission-agent-3", x: 50, y: 50 },
      { id: "mission-agent-3", x: 50, y: 50 },
    ],
    texts: [],
  },
  {
    id: "jhs-f4",
    name: "中学棟４階",
    alt: "中央に女子トイレがあります。",
    maps: [
      { id: "jhs-f3", x: 10, y: 14 },
      { id: "jhs-f3", x: 27, y: 83 },
      { id: "jhs-f5", x: 10, y: 11 },
      { id: "jhs-f5", x: 27, y: 80 },
    ],
    orgs: [
      { id: "asobase", x: 50, y: 50 },
      { id: "mezauchi", x: 50, y: 50 },
      { id: "card-game", x: 50, y: 50 },
      { id: "jhs2nd", x: 50, y: 50 },
      { id: "shinbei", x: 50, y: 50 },
      { id: "shinbei", x: 50, y: 50 },
      { id: "mission-agent-4", x: 50, y: 50 },
    ],
    texts: [],
  },
  {
    id: "jhs-f5",
    name: "中学棟５階",
    alt: "中央に男子トイレがあります。",
    maps: [
      { id: "jhs-f4", x: 10, y: 12 },
      { id: "jhs-f4", x: 27, y: 81 },
    ],
    orgs: [
      { id: "escape", x: 50, y: 50 },
      { id: "aset", x: 50, y: 50 },
      { id: "climbing", x: 50, y: 50 },
      { id: "shogi", x: 50, y: 50 },
      { id: "calligraphy", x: 50, y: 50 },
      { id: "calligraphy", x: 50, y: 50 },
      { id: "mission-agent-5", x: 50, y: 50 },
    ],
    texts: [],
  },
  {
    id: "hs-b1",
    name: "高校棟地下１階",
    alt:
      "アリーナの反対側に女子トイレがあります。展示等はありません。" +
      "アリーナと繋がっています。",
    maps: [
      { id: "hs-f1", x: 21, y: 5 },
      { id: "hs-f1", x: 41, y: 95 },
      { id: "arena", x: 13, y: 100 },
    ],
    orgs: [],
    texts: [],
  },
  {
    id: "hs-f1",
    name: "高校棟１階",
    alt:
      "保健室の隣に女子トイレがあります。" +
      "高校棟前には浅野ザ・ベストの投票所があります。",
    maps: [
      { id: "asano", x: 25, y: 69 },
      { id: "hs-b1", x: 47, y: 6 },
      { id: "hs-b1", x: 61, y: 97 },
      { id: "hs-f2", x: 47, y: 3 },
      { id: "hs-f2", x: 61, y: 94 },
    ],
    orgs: [
      { id: "art", x: 50, y: 50 },
      { id: "abc-bio-room", x: 50, y: 50 },
      { id: "student-council", x: 50, y: 50 },
    ],
    texts: [],
  },
  {
    id: "hs-f2",
    name: "高校棟２階",
    alt:
      "アリーナの反対側に男子トイレがあります。" +
      "その手前には文化祭本部があります。本館２階と渡り廊下で繋がっています。",
    maps: [
      { id: "main-f2", x: 4, y: 46 },
      { id: "hs-f1", x: 20, y: 6 },
      { id: "hs-f1", x: 42, y: 97 },
      { id: "hs-f3", x: 20, y: 3 },
      { id: "hs-f3", x: 42, y: 94 },
    ],
    orgs: [
      { id: "reunion", x: 50, y: 50 },
      { id: "supporter", x: 50, y: 50 },
    ],
    texts: [],
  },
  {
    id: "hs-f3",
    name: "高校棟３階",
    alt:
      "アリーナの反対側に女子トイレがあります。" +
      "隣の廊下は清話書林と渡り廊下で繋がっています。" +
      "途中で本館３階を経由し、そこに男子トイレと女子トイレがあります。",
    maps: [
      { id: "hs-f2", x: 33, y: 6 },
      { id: "hs-f2", x: 40, y: 97 },
      { id: "hs-f4", x: 33, y: 3 },
      { id: "hs-f4", x: 40, y: 94 },
      { id: "library", x: 9, y: 21 },
    ],
    orgs: [
      { id: "apc", x: 50, y: 50 },
      { id: "apc", x: 50, y: 50 },
      { id: "abc-classroom", x: 50, y: 50 },
      { id: "a-esc-p", x: 50, y: 50 },
      { id: "a-esc", x: 50, y: 50 },
      { id: "a-esc", x: 50, y: 50 },
      { id: "acc", x: 50, y: 50 },
      { id: "acc", x: 50, y: 50 },
    ],
    texts: [],
  },
  {
    id: "hs-f4",
    name: "高校棟４階",
    alt: "アリーナの反対側に男子トイレがあります。",
    maps: [
      { id: "hs-f3", x: 26, y: 6 },
      { id: "hs-f3", x: 34, y: 97 },
      { id: "hs-f5", x: 26, y: 3 },
      { id: "hs-f5", x: 34, y: 94 },
    ],
    orgs: [
      { id: "archerz", x: 50, y: 50 },
      { id: "archerz", x: 50, y: 50 },
      { id: "math", x: 50, y: 50 },
      { id: "aoc", x: 50, y: 50 },
      { id: "kcc", x: 50, y: 50 },
      { id: "kcc", x: 50, y: 50 },
      { id: "aqs-classroom", x: 50, y: 50 },
      { id: "adu-classroom", x: 50, y: 50 },
    ],
    texts: [],
  },
  {
    id: "hs-f5",
    name: "高校棟５階",
    alt: "アリーナの反対側に女子トイレがあります。",
    maps: [
      { id: "hs-f4", x: 26, y: 5 },
      { id: "hs-f4", x: 34, y: 95 },
    ],
    orgs: [
      { id: "ahsc", x: 50, y: 50 },
      { id: "ahsc", x: 50, y: 50 },
      { id: "ara", x: 50, y: 50 },
      { id: "ara", x: 50, y: 50 },
      { id: "ara", x: 50, y: 50 },
      { id: "squirrel", x: 50, y: 50 },
      { id: "squirrel", x: 50, y: 50 },
    ],
    texts: [],
  },
  {
    id: "library",
    name: "清話書林",
    alt:
      "清話書林には男子トイレと女子トイレがあります。" +
      "書林中学棟３階と高校棟３階から渡り廊下で繋がっています。" +
      "中学棟３階からは講堂横の渡り廊下を通り、" +
      "高校棟３階からは本館に連絡し渡り廊下を通って入館できます。" +
      "浅野生の憩いの場でもある清話書林。" +
      "普段は授業や各部活の活動場所としても活躍します。" +
      "少し歩き疲れたなと思ったら、好きな本を手に取って、" +
      "涼んでみてはいかがでしょうか。",
    maps: [
      { id: "jhs-f3", x: 16, y: 38 },
      { id: "hs-f3", x: 68, y: 43 },
    ],
    orgs: [
      { id: "alc", x: 50, y: 50 },
      { id: "lib-committee", x: 50, y: 50 },
    ],
    texts: [],
  },
  {
    id: "arena",
    name: "アリーナ",
    alt:
      "打越アリーナには靴を脱いでお入りください。" +
      "スリッパは学校側で用意しております。入口でビニール袋をお配りしてます。" +
      "１階には男子トイレと女子トイレがそれぞれ２つずつあります。" +
      "２階には女子トイレがあります。３階には男子トイレがあります。" +
      "アリーナ１階の出入りは自由です。空いている席に自由にお座りください。" +
      "１階のプールと３、４階は許可なく立ち入ることはできません。" +
      "ただし、３階から高校棟地下１階への通り抜けは可能です。",
    maps: [
      { id: "asano", x: 7, y: 77 },
      { id: "hs-b1", x: 40, y: 17 },
    ],
    orgs: [
      { id: "awo", x: 50, y: 50 },
      { id: "jaa-arena", x: 50, y: 50 },
      { id: "aqs-arena", x: 50, y: 50 },
      { id: "cooland", x: 50, y: 50 },
    ],
    texts: [],
  },
  {
    id: "hc-a",
    name: "ハンドボールコートＡ",
    alt:
      "ハンドボールコートＡは生徒ホールをでてすぐの所にあります。" +
      "購入したものは、飲食スペースでお召上がりください。" +
      "食べ歩きや持ち帰りはご遠慮願います。ゴミの分別にご協力ください。" +
      "列に並ぶ際は会話をお控えください。黙食やマスク会食にご協力ください。" +
      "浅野生は利用できません。",
    maps: [
      { id: "asano", x: 68, y: 37 },
      { id: "jhs-f1", x: 78, y: 21 },
      { id: "field", x: 65, y: 29 },
    ],
    orgs: [
      { id: "polar-bear", x: 50, y: 50 },
      { id: "takoyaki", x: 50, y: 50 },
      { id: "frites", x: 50, y: 50 },
      { id: "hotdog", x: 50, y: 50 },
      { id: "popcorn", x: 50, y: 50 },
      { id: "royal-bird", x: 50, y: 50 },
      { id: "ice-cream", x: 50, y: 50 },
    ],
    texts: [],
  },
  {
    id: "field",
    name: "グラウンド",
    alt: "男子トイレと女子トイレがあります。",
    maps: [
      { id: "asano", x: 97, y: 72 },
      { id: "jhs-f1", x: 90, y: 11 },
      { id: "hc-a", x: 78, y: 3 },
    ],
    orgs: [
      { id: "baseball", x: 50, y: 50 },
      { id: "football", x: 50, y: 50 },
      { id: "soccer", x: 50, y: 50 },
      { id: "track-field", x: 50, y: 50 },
      { id: "rocket", x: 50, y: 50 },
    ],
    texts: [],
  },
];
