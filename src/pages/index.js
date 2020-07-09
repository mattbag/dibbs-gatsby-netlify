/* global tw */

import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
// import Img from "gatsby-image";

import Layout from "../components/Layout";
import Video from "../components/Video";
import { css } from "emotion";

const heading = css(tw`text-pink text-center text-3xl my-6`);
// const bandImg = css(tw`w-md mx-auto my-2 block`);
const block = css(tw`py-4 md:py-8`);
const blog = {
  postLink: css(tw`serif text-md`),
};

const Hr = () => <hr style={{ width: 60, margin: "20 auto" }} />;

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.posts;
    const { edges: dates } = data.dates;
    const { edges: hp } = data.hp;
    const homepage = hp[0].node.frontmatter;
    const USE_BLOG = homepage.use_blog;

    // console.log(homepage);

    return (
      <Layout>
        <section className="section">
          <div className={block}>
            <Hr />

            <div className="content">
              {homepage.intro && homepage.intro.heading && (
                <h2 className={heading}>{homepage.intro.heading}</h2>
              )}
              {homepage.intro && homepage.intro.description && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: homepage.intro.description,
                  }}
                ></div>
              )}
              {homepage.videoFeatured.videoSource && (
                <Video
                  poster={
                    homepage.videoFeatured.videoImage.childImageSharp.fluid
                  }
                  videoSource={homepage.videoFeatured.videoSource}
                  fallback={homepage.videoFeatured.videoImage.publicURL}
                />
              )}
            </div>
            <Hr />
            <Video
              poster={homepage.video.videoImage.childImageSharp.fluid}
              videoSource={homepage.video.videoSource}
              fallback={homepage.video.videoImage.publicURL}
            />

            <div className="content">
              <Hr />

              <br />
              {homepage.image && (
                // <Img
                //   fluid={homepage.image.childImageSharp.fluid}
                //   alt="Dive Bell"
                // />
                <img src={homepage.image.publicURL} alt="Dive Bell" />
              )}

              <br />
              <Hr />
            </div>

            <h2 className={heading}>Dates</h2>
            <br />
            {dates.map(({ node: post }) => (
              <div
                className="content"
                style={{
                  border: "1px solid white",
                  padding: "1rem 1.5rem 2rem 1.5rem",
                  margin: "0 auto 2rem auto",
                  maxWidth: 400,
                }}
                key={post.id}
              >
                <h3 style={{ marginTop: 0 }}>
                  <Link className={blog.postLink} to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <br />
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </h3>
                <p>{post.excerpt}</p>

                {post.frontmatter.eventUrl && (
                  <a
                    style={{
                      borderBottom: "2px dashed white",
                      padding: ".35rem 0",
                      marginRight: "1rem",
                    }}
                    href={post.frontmatter.eventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Info
                  </a>
                )}
                <Link to={post.fields.slug} style={{ float: "right" }}>
                  Read more
                </Link>
              </div>
            ))}
            {USE_BLOG && <Hr />}
            <br />
            {USE_BLOG &&
              posts.map(({ node: post }) => (
                <div
                  className="content"
                  style={{
                    border: "1px solid white",
                    padding: "1rem 1.5rem",
                    margin: "0 auto 2rem auto",
                    maxWidth: 400,
                  }}
                  key={post.id}
                >
                  <h3
                    style={{
                      marginTop: 4,
                      marginBottom: 0,
                    }}
                  >
                    <Link className={blog.postLink} to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>

                    <br />
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </h3>

                  <p>{post.excerpt}</p>

                  <Link to={post.fields.slug}>Keep Reading →</Link>
                </div>
              ))}
            <Hr />
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};
// https://www.npmjs.com/package/gatsby-plugin-netlify-cms-paths
// https://blog.alexluong.com/generate-gatsby-image-sharp-from-an-image-url/
// https://github.com/gatsbyjs/gatsby/issues/2995#issuecomment-408072399
// https://github.com/gatsbyjs/gatsby/issues/4769
export const pageQuery = graphql`
  query IndexQuery {
    hp: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/homepage.md/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            use_blog
            title
            description
            heading
            intro {
              heading
              description
            }
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            videoFeatured {
              videoImage {
                absolutePath
                publicURL
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              videoSource
            }
            video {
              videoImage {
                absolutePath
                publicURL
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              videoSource
            }
          }
        }
      }
    }
    posts: allMarkdownRemark(
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
    dates: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "date-post" } } }
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
            eventUrl
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
