import React from "react";
import PropTypes from "prop-types";

import GlobalStyles from "../../styles/global";
import Header from "../../components/Header";

const Layout = ({ children, pageTitle, header }) => {
  return (
    <>
      <GlobalStyles />
      {header === false ? "" : <Header Title={pageTitle} />}
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
