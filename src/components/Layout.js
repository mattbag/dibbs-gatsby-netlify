/* global tw */
import { css } from "emotion";
import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import Socialbar from "../components/Socialbar";
// import './all.sass'
import "./master.css";

const layoutWrap = css(tw`max-w-2xl mx-auto px-4`);
const outernMost = css(tw`antialiased`);
// const sticky = css(tw`sticky pin-t bg-white z-10`);

const TemplateWrapper = ({ children }) => (
  <div className={outernMost}>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    {/* <div> */}
    {/* <Socialbar /> */}
    <Navbar />
    {/* </div> */}
    <div className={layoutWrap}>{children}</div>
  </div>
);

export default TemplateWrapper;
