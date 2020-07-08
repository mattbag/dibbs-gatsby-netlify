/* global tw */
import { css } from "emotion";

import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Video from "../components/Video";

const dateStyle = {
  wrap: css(tw`py-4 md:py-8 max-w-md mx-auto`),
};
export const DatePostTemplate = ({
  content,
  contentComponent,
  description,
  // tags,
  title,
  date,
  video,
  eventUrl,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className={dateStyle.wrap}>
      {helmet || ""}

      <div className="column is-10 is-offset-1">
        <h1>{title}</h1>
        <h3>{date}</h3>
        {/* <hr style={{ width: 100 }} /> */}
        {video && video.videoSource && (
          // <Video videoSource={video.videoSource} poster={video.videoImage} />
          <Video
            videoSource={video.videoSource}
            poster={video.videoImage.childImageSharp.fluid}
          />
        )}

        {/* <p>{description}</p> */}
        <PostContent content={content} />
        {eventUrl && (
          <a
            style={{
              borderBottom: "2px dashed white",
              padding: ".35rem 0",
              marginRight: "1rem",
            }}
            href={eventUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Info
          </a>
        )}
        {/* {false && tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null} */}
      </div>
      <br />
      <br />
      <hr style={{ margin: "20 auto", width: 100 }} />
    </section>
  );
};

DatePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  // helmet: PropTypes.instanceOf(Helmet)
  helmet: PropTypes.any,
};

const DatePost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout seodescription={post.frontmatter.description}>
      <DatePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | DIVE BELL`} />}
        // tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        video={post.frontmatter.video}
        eventUrl={post.frontmatter.eventUrl}
      />
    </Layout>
  );
};

DatePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default DatePost;

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        video {
          videoSource
          videoImage {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        eventUrl
        description
        # tags
      }
    }
  }
`;
