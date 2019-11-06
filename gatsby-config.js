module.exports = {
  siteMetadata: {
    title: `Benjamin Geck`,
    description: ``,
    author: `Benjamin Geck`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              disableBgImageOnAlpha: true,
              backgroundColor: "none",
              withWebp: true,
              tracedSVG: true,
            },
          },
        ],
        defaultLayouts: {
          posts: require.resolve("./src/components/LayoutPost.js"),
          default: require.resolve("./src/components/LayoutDefault.js"),
        },
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1920,
        disableBgImageOnAlpha: true,
        backgroundColor: "none",
        withWebp: true,
        tracedSVG: true,
      },
    }, //https://github.com/gatsbyjs/gatsby/issues/16712
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `benjmn`,
        short_name: `benjmn`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
