import React from "react";
import PropTypes from "prop-types";

import GlobalStyles from "../../styles/global";
import Header from "../../components/Header";
import Container from "../../components/Container";

const Layout = ({ children, pageTitle, header }) => {
  return (
    <>
      <GlobalStyles />
      {header === false ? "" : <Header siteTitle={pageTitle} />}
      {/* <Container>{children}</Container> */}
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
