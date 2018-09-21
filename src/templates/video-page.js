import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const VideosPageTemplate = ({ title, videolist, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  console.log(videolist)

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section" style={{maxWidth:800,margin:'auto', padding:'60 0'}}>
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <hr style={{ width: 100, margin: 0 }} />
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

VideosPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const VideosPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <VideosPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        videos={post.videolist}
      />
    </Layout>
  )
}

VideosPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default VideosPage

export const VideosPageQuery = graphql`
  query VideosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        videolist{
          videoUrl
        }
      }
    }
  }
`
