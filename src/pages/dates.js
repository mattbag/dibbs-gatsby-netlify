/* global tw */

import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

import { css } from "emotion";

export default class DatesPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const heading = css(tw`text-pink text-center`);
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h2 className={heading}>All the Dates</h2>
              <hr style={{ width: 60, margin: '20 auto' }} />
              <br/>
            </div>
            {posts.map(({ node: post }) => (
              <div
                className="content"
                style={{
                  border: "1px solid #eaecee",
                  padding: "2em 4em",
                  marginBottom: "2em",
                }}
                key={post.id}
              >
                <h2>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <br/>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </h2>
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

DatesPage.propTypes = {
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
      filter: { frontmatter: { templateKey: { eq: "date-post" } } }
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
