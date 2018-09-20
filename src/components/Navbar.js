/* global tw */
import { css } from "emotion";
import React from "react";
import { Link } from "gatsby";

const title = css(
  tw`my-0 text-xl md:text-4xl leading-tight text-red-darker text-center`
);
const navlink = css(
  tw`my-0 text-lg leading-tight text-red-dark no-underline mx-2`
);
const navflex = css(tw`flex justify-center`);

const Navbar = () => (
  <nav className="navbar is-transparent" style={{ padding: ".3rem 4vw" }}>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className={navlink}>
          {/* <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </figure> */}
          <h1 className={title}>Dibbs & The Gang</h1>
        </Link>
      </div>
      <div className={navflex}>
        <Link className={navlink} to="/about">
          Bio
        </Link>
        <Link className={navlink} to="/products">
          Dates
        </Link>
        <Link className={navlink} to="/products">
          Videos
        </Link>
      </div>
      <div />
    </div>
  </nav>
);

export default Navbar;
