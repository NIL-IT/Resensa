import React from "react";

const SeoBlock = ({ title, description, url }) => {
  return (
    <div style={{ display: "none" }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href="https://example.com">{url}</a>
    </div>
  );
};

export default SeoBlock;
