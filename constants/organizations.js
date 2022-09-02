// SPDX-License-Identifier: CC-BY-NC-4.0

export const CATEGORIES = [
  { id: "exhibition", name: "展示" },
  { id: "cafe", name: "喫茶" },
  { id: "amusement", name: "アミューズメント" },
  { id: "performance", name: "公演" },
  { id: "stage", name: "ステージ" },
  { id: "field", name: "グラウンド" },
  { id: "band", name: "バンド" },
  { id: "stand", name: "屋台" },
  { id: "shop", name: "販売" },
];

export const ORGANIZATIONS = [
  {
    id: "butsuri",
    name: "物理部",
    category: "exhibition",
    areas: ["kkt01"],
    description: "説明",
    exhibition: {
      name: "物理部",
      rooms: ["A", "B"],
      image: "https://picsum.photos/256/256",
    },
  },
];
