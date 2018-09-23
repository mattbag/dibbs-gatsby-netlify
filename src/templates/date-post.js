/* global tw */
import { css } from "emotion";

import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Video from "../components/Video";

const dateStyle = {
  wrap: css(tw`py-4 md:py-8 max-w-md mx-auto`)
};
export const DatePostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  video,
  eventUrl,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className={dateStyle.wrap}>
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h2>

            <Video videoSource={video} />
            <p>{description}</p>
            <PostContent content={content} />
            {eventUrl && (
              <a
                style={{
                  borderBottom: "2px dashed white",
                  padding: ".35rem .7rem",
                  marginRight: "1rem"
                }}
                href={eventUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Save the date!
              </a>
            )}
            {false && tags && tags.length ? (
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
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

DatePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  // helmet: PropTypes.instanceOf(Helmet)
  helmet: PropTypes.any
};

const DatePost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <DatePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | DIVE BELL`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        video={post.frontmatter.videoUrl}
        eventUrl={post.frontmatter.eventUrl}
      />
    </Layout>
  );
};

DatePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
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
        videoUrl
        eventUrl
        description
        tags
      }
    }
  }
`;
