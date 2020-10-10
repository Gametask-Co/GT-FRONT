import React from "react";
import PropTypes from "prop-types";

import GlobalStyles from "../../styles/global";
import Header from "../../components/Header";

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <GlobalStyles />
      <Header siteTitle={pageTitle} />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
