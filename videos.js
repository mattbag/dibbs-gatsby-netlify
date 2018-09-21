// /* global tw */

import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Video from "../components/Video";

// import { css } from "emotion";

export default class VideoSpage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    // const heading = css(tw`text-pink text-center`);
    return (
      <Layout>
        <section className="section">
          <div className="container">
            {/* <div className="content">
              <h2 className={heading}>All the videos</h2>
            </div> */}
            {posts.map(({ node: post }) => (
              <div
                className="content"
                style={{
                  marginBottom: "3em",
                }}
                key={post.id}
              >
                <Video videoSource=""/>
                {/* <hr style={{width:20}}/> */}
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

VideoSpage.propTypes = {
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
