module.exports = {
  siteMetadata: {
    title: "DIVE BELL"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-emotion",
    `gatsby-plugin-netlify-cms-paths`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
              linkImagesToOriginal: false,
              withWebp: true,
              backgroundColor: 'pink',
              quality: 70
            },
          },
      ]
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Cormorant Garamond']
        }
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DIVE BELL`,
        short_name: `DIVE BELL`,
        start_url: `/`,
        background_color: `#0a0a0a`,
        theme_color: `#ffc0cb`,
        display: `standalone`,
        icon: `src/img/icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};

// https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/?=robo