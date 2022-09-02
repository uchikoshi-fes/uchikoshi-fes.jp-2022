// SPDX-License-Identifier: MIT

import fs from "fs";
import { AREAS } from "@/pages/orgs/index";

const fetchOrganizations = async () => {
  // このディレクトリにある mdx ファイルが全ての団体
  const organizationIds = (
    await fs.promises.readdir(`components/organizations/`, {
      withFileTypes: true,
    })
  )
    .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".mdx"))
    .map((dirent) => dirent.name.replace(/\.mdx$/, ""));
  // それぞれの団体の情報を非同期に取得
  const organizations = [];
  await Promise.all(
    organizationIds.map(async (id) =>
      organizations.push({ id, ...(await import(`./${id}.mdx`)).META })
    )
  );
  // エリアでソート
  organizations.sort(
    (a, b) =>
      AREAS.findIndexOf(({ id }) => id === a.area) -
      AREAS.findIndexOf(({ id }) => id === b.area)
  );
  return organizations;
};

export default fetchOrganizations;
