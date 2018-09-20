/* global tw */
import React from 'react'
import Helmet from 'react-helmet'
import { css } from 'emotion';

import Navbar from '../components/Navbar'
import Socialbar from '../components/Socialbar'
// import './all.sass'
import './master.css'

const layoutWrap = css(tw`max-w-2xl mx-auto px-4`);
const sticky = css(tw`sticky pin-t bg-white z-10`);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <div className={sticky}>
    <Socialbar />
    <Navbar />
    </div>
    <div className={layoutWrap}>{children}</div>
  </div>
)

export default TemplateWrapper
