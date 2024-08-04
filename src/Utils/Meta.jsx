import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description }) => {
  return (
    <Helmet>
      <title>
        {title} - Top Solar Panel Cleaning Services in Gujarat | Efficient &
        Professional | SolExpert
      </title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Meta;
