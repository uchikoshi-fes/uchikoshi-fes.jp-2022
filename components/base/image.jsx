import NextImage from "next/image";

const customLoader = ({ src }) => {
  return src;
};

const Image = ({ ...props }) => {
  return <NextImage {...props} loader={customLoader} />;
};

export default Image;
