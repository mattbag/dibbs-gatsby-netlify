/* global tw */

import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

import { css } from "emotion";

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const heading = css(tw`text-pink text-center`);
    return (
      <Layout seotitle="BLOG">
        <section className="section">
          <div className="container">
            <div className="content">
              <h2 className={heading}>All the Stories</h2>
            </div>
            {posts.map(({ node: post }) => (
              <div
                className="content"
                style={{
                  border: "1px solid #eaecee",
                  padding: "2rem 3rem",
                  maxWidth: '40em',
                  margin: '2rem auto'
                }}
                key={post.id}
              >
              <h2>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
              </h2>
                <p>
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
            <hr style={{width:100, margin:'auto'}}/>
          </div>
        </section>
      </Layout>
    );
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
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
