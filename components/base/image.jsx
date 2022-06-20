import NextImage from "next/image";

const customLoader = ({ src }) => {
  return src;
};

export default function Image(props) {
  return <NextImage {...props} loader={customLoader} />;
}
