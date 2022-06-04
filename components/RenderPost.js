// SPDX-License-Identifier: MIT

import { MDXRemote } from "next-mdx-remote";

const components = {
  /* 
  img: (props) => <a {...props} /> カスタムコンポーネントに置き換え可能
  https://github.com/hashicorp/next-mdx-remote#replacing-default-components
  */
};

const RenderPost = ({ postData, mdxSource }) => {
  return <MDXRemote {...mdxSource} components={components} />;
};

export default RenderPost;
