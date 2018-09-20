/* global tw */

import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { css } from "emotion";

// import band from '../img/unnamed-1.png'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const heading = css(tw`text-pink text-center`);
    // const bandImg = css(tw`max-w-md mx-auto my-2 block`);
    return (
      <Layout>
        <section className="section">
          <div className="container">
          <hr style={{width:100, margin:'20 auto'}}/>
          {/* <img src={band} alt="Dive Bell" className={bandImg}/> */}
            <div className="content">
              <hr style={{width:100, margin:'20 auto'}}/>
              <h2 className={heading}>Latest Stories</h2>
            </div>
            {posts.map(({ node: post }) => (
              <div
                className="content"
                style={{
                  border: "1px solid pink",
                  padding: "1rem 1.5rem",
                  margin: "0 auto 2rem auto",
                  maxWidth: 400
                }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <br/>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
