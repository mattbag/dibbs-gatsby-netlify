import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Video from "../components/Video";

export const VideosPageTemplate = ({
  title,
  videos,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  const Hr = (margin) => <hr style={{ width: 100, margin: margin }} />;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div
              className="section"
              style={{ maxWidth: 800, margin: "auto", padding: "60 0" }}
            >
              <h2>{title}</h2>
              {Hr("0")}
              <PageContent className="content" content={content} />

              {videos.map((v, i) => (
                <Video
                  videoSource={v.videoUrl}
                  poster={v.videoImage.childImageSharp.fluid}
                  key={`listvideo_${i}`}
                  fallback={v.videoImage.publicURL}
                />
              ))}

              {Hr("20 auto")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

VideosPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const VideosPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout seotitle="VIDEOS">
      <VideosPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        videos={post.frontmatter.videolist}
      />
    </Layout>
  );
};

VideosPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideosPage;

export const VideosPageQuery = graphql`
  query VideosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        videolist {
          videoUrl
          videoImage {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
