import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoDataFoundPage = () => {
  const navigation = useNavigate();
  useEffect(() => {
    navigation("/");
  }, []);

  return <div>404 Page Not Found!</div>;
};

export default NoDataFoundPage;
