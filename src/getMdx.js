// SPDX-License-Identifier: MIT

import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

const dir = join(process.cwd(), "posts/");

/**
 * mdxのすべてのファイル名を配列で返します
 */
const getAllPostNames = async () => {
  const fileList = readdirSync(dir).map((path) => path.split(/\.mdx/)[0]);
  return fileList;
};

/**
 * mdxのデータを返します。
 * 存在しなかった場合nullを返します
 */
const getPostData = async (fileName) => {
  const slug = fileName.split(/\.mdx/)[0];
  const fullPath = join(dir, fileName + ".mdx");

  if (!existsSync(fullPath)) return null;

  const fileContents = readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  return { slug, meta: data, content };
};

export { getAllPostNames, getPostData };
