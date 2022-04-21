const HTMLParser = ({ children }) => (
  <span dangerouslySetInnerHTML={{ __html: children }}></span>
);

export default HTMLParser;
