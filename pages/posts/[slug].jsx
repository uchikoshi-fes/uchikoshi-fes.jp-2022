// SPDX-License-Identifier: MIT

import { serialize } from "next-mdx-remote/serialize";

import { getAllPostNames, getPostData } from "../../src/getMdx";
import RenderPost from "../../components/RenderPost";

const Post = ({ postData, mdxSource }) => {
  return <RenderPost postData={postData} mdxSource={mdxSource} />;
};

const getStaticProps = async ({ params }) => {
  const _params = params.slug;
  const postData = await getPostData(_params);
  const mdxSource = await serialize(postData.content);
  return { props: { postData, mdxSource } };
};

const getStaticPaths = async () => {
  const fileNames = await getAllPostNames();
  const paths = fileNames.map((fileName) => ({ params: { slug: fileName } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
export { getStaticPaths, getStaticProps };
