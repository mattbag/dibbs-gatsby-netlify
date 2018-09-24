/* global tw */

import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

import { css } from "emotion";

const date = {
  wrap: css`${tw`mx-auto mb-8`} max-width:800px`,
  card: css`${tw`p-4 md:py-6 md:px-10 mb-4`}`,
  // page: css(tw`p-4 md:px-8 mb-4 max-w-md mx-auto `),
};

export default class DatesPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout seotitle="DATES">
        <section className={date.wrap}>

          <h2>All the Dates</h2>
          <hr style={{ width: 100, margin: '1rem 0' }} />
          <br />

          {posts.map(({ node: post }) => (
            <div
              className={date.card}
              style={{
                border: "1px solid #fff"
              }}
              key={post.id}
            >
              <h2 style={{ marginTop: 6 }}>
                <Link className="has-text-primary" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <br />
                <span> &bull; ON: </span>
                <small>{post.frontmatter.date}</small>
              </h2>
              <p>
                {post.excerpt}
                <br />
                <br />

                {post.frontmatter.eventUrl && (
                  <a
                    style={{
                      borderBottom: "2px dashed white",
                      padding: ".35rem .7rem",
                      marginRight: "1rem"
                    }}
                    href={post.frontmatter.eventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Save the date!
                    </a>
                )}
                <Link className="button is-small" to={post.fields.slug}>
                  Keep Reading →
                  </Link>
              </p>
            </div>
          ))}
          <br />
          <hr style={{ width: 100 }} />
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
            eventUrl
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
