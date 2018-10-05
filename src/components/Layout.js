/* global tw */
import { css } from "emotion";
import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";

// import "./../styles/global";
// import './all.sass'
// import "../styles//master.css";
import Socialbar from "./SocialBar";

const layoutWrap = css(tw`max-w-2xl mx-auto px-4`);
const outernMost = css(tw`p-4`);
// const sticky = css(tw`sticky pin-t bg-white z-10`);

const TemplateWrapper = ({ children, seotitle, seodescription }) => (
  <div className={outernMost} style={{ minHeight: "90vh" }}>
    <Helmet title={seotitle ? seotitle + " | DIVE BELL" : "DIVE BELL"}>
      <html lang="en" />
      <meta
        name="description"
        content={seodescription ? seodescription : "Follow DIVE BELL"}
      />
    </Helmet>
    <Socialbar />
    <Navbar />
    <div className={layoutWrap}>{children}</div>
    <Socialbar />
  </div>
);

export default TemplateWrapper;
