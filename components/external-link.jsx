const ExternalLink = (props) => {
  return (
    <a {...props} rel="noreferrer noopener" target="_blank">
      {props.children}
    </a>
  );
};

export default ExternalLink;
