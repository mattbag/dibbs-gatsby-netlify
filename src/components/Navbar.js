/* global tw */
import { css } from "emotion";
import React from "react";
import { Link } from "gatsby";

const title = css(
  tw`my-0 text-xl md:text-4xl leading-tight text-pink text-center`
);
const navlink = css(
  tw`my-0 text-lg leading-tight text-pink-dark no-underline uppercase mx-2 inline-block`
);
const navflex = css(tw`flex justify-around max-w-md mx-auto`);

const Navbar = () => (
  <nav className="navbar is-transparent" style={{ 
    padding: '.3rem 4vw', position:'sticky', top:0, backgroundColor:'black', zIndex:9 }}>
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
        <Link className={navlink} to="/products">Videos</Link>
        <Link className={navlink} to="/blog">Blog</Link>
      </div>
      <div />
    </div>
  </nav>
);

export default Navbar;
