// SPDX-License-Identifier: MIT

// components
import SchoolMap, { getStaticProps as getMapProps } from "./[map-id]";

const getStaticProps = async () => {
  return await getMapProps({ params: { "map-id": "asano" } });
};

export { getStaticProps };
export default SchoolMap;
