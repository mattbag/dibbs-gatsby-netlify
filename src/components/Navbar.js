/* global tw */
import { css } from "emotion";
import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const title = css(
  tw`my-0 text-5xl leading-none text-pink tracking-wide text-center`
);
const navlink = css(
  tw`my-0 text-lg leading-tight text-pink-light no-underline uppercase mx-2 inline-block`
);
const navflex = css(tw`flex justify-around max-w-sm mx-auto relative`);
const navwrap = css(tw`p-2 sticky pin-t bg-black`);

const Navbar = () => (

  <StaticQuery
  query={graphql`
    query {
      hp: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/homepage.md/"}}) {
        edges {
          node {
            frontmatter {
              use_blog
            }
          }
        }
      }
    }
  `}
  render={data => (
    
    <nav className={navwrap} style={{ zIndex: 9 }}>
    <div className="container">
      <div className="navbar-brand" style={{ textAlign: "center" }}>
        <Link to="/" className={navlink}>
          <h1 className={title}>Dive bell</h1>
        </Link>
      </div>

      <div className={navflex} style={{ justifyContent: "space-evenly",right: -5 }}>
        <Link className={navlink} to="/dates">
          Dates
        </Link>
        <Link className={navlink} to="/about">
          Bio
        </Link>
        <Link className={navlink} to="/videos">
          Videos
        </Link>
        {data.hp.edges[0].node.frontmatter.use_blog &&
          <Link className={navlink} to="/blog">Blog</Link>
        }
      </div>
    </div>
  </nav>
  )}
/>
  
);

export default Navbar;
