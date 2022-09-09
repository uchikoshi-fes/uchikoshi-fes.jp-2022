// SPDX-License-Identifier: MIT

import fs from "fs";
import { AREAS } from "@/pages/orgs/index";

const importOrganization = async (id) => {
  return await import(`./${id}.mdx`);
};

const fetchOrganizationMeta = async (id) => {
  return (await importOrganization(id)).META;
};

const fetchOrganizationLogo = async (id) => {
  const dirents = await fs.promises
    .readdir(`public/orgs/${id}/`, {
      withFileTypes: true,
    })
    .catch(() => []);
  return dirents.find(
    (dirent) => dirent.isFile() && dirent.name.startsWith("logo.")
  )?.name;
};

const fetchOrganizationDescription = async (id) => {
  return (await importOrganization(id)).default;
};

const fetchOrganization = async (id) => {
  const organization = { id };
  // 団体の情報を非同期に取得
  await Promise.all([
    (async () => {
      Object.assign(organization, await fetchOrganizationMeta(id));
    })(),
    (async () => {
      organization.logo = (await fetchOrganizationLogo(id)) ?? "";
    })(),
  ]);
  return organization;
};

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
  const organizations = await Promise.all(
    organizationIds.map(fetchOrganization)
  );
  // エリアでソート
  organizations.sort(
    (a, b) =>
      AREAS.findIndex(({ id }) => id === a.areaId) -
        AREAS.findIndex(({ id }) => id === b.areaId) ||
      a.room.localeCompare(b.room)
  );
  return organizations;
};

export { fetchOrganizationDescription, fetchOrganization, fetchOrganizations };
