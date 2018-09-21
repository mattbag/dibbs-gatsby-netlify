/* global tw */

import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Video from "../components/Video";
import { css } from "emotion";

import poster from '../img/unnamed-1.png'
import band from '../img/unnamed-2.jpg'
const heading = css(tw`text-pink text-center text-3xl`);
const bandImg = css(tw`max-w-md mx-auto my-2 block`);
const block = css(tw`py-4 md:py-8`);
const blog = {
  postLink: css(tw`serif text-md`),
}
export default class IndexPage extends React.Component {
  render() {
    const USE_BLOG = false;
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <Layout>
        <section className="section">
          <div className={block}>

            <hr style={{ width: 60, margin: '20 auto' }} />
            {/* <h2 className={heading}>Latest Video</h2> */}
            <Video poster={band} videoSource={'https://www.youtube.com/embed/t5xhya-grlU'} />

            <div className="content">
              <hr style={{ width: 60, margin: '20 auto' }} />
              <h2 className={heading}>Bio</h2>
              <img src={poster} alt="Dive Bell" className={bandImg} />
              <br/>
              <hr style={{ width: 60, margin: '20 auto' }} />
            </div>

            {USE_BLOG && posts.map(({ node: post }) => (
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
                  <Link className={blog.postLink} to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <br />
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
