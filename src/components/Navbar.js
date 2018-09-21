/* global tw */
import { css } from "emotion";
import React from "react";
import { Link } from "gatsby";

const title = css(
  tw`my-0 text-xl md:text-5xl leading-tight text-pink text-center`
);
const navlink = css(
  tw`my-0 text-lg leading-tight text-pink-light no-underline uppercase mx-2 inline-block`
);
const navflex = css(tw`flex justify-around max-w-sm mx-auto`);
const navwrap = css(tw`p-4 sticky pin-t bg-black`);

const Navbar = () => (
  <nav className={navwrap} style={{ zIndex:9 }}>
    <div className="container">
      <div className="navbar-brand" style={{textAlign:'center'}}>
        <Link to="/" className={navlink}>
          {/* <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </figure> */}
          <h1 className={title}>Dive bell</h1>
        </Link>
      </div>
      <div className={navflex}>
        <Link className={navlink} to="/about">Bio</Link>
        <Link className={navlink} to="/products">Dates</Link>
        <Link className={navlink} to="/videos">Videos</Link>
        <Link className={navlink} to="/blog">Blog</Link>
      </div>
      <div />
    </div>
  </nav>
);

export default Navbar;
