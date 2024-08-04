import React from "react";
import { Helmet } from "react-helmet";

const BlogMeta = ({ title, link, description, keywords }) => {
  return (
    <Helmet>
      <title>
        {title} - Top Solar Panel Cleaning Services in Gujarat | Efficient &
        Professional | SolExpert
      </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href={`https://solexpert.in/blog/${link}`} />
    </Helmet>
  );
};

export default BlogMeta;
