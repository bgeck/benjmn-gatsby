module.exports = {
  siteMetadata: {
    title: `Benjamin Geck`,
    description: `Coder, Designer & Artist: Fusing technology and art into explorative experiences.`,
    author: `Benjamin Geck`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`,
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
        remarkPlugins: [require("remark-containers")],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 992,
              disableBgImageOnAlpha: true,
              backgroundColor: "none",
              withWebp: true,
              tracedSVG: true,
              quality: 77,
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
        maxWidth: 992,
        disableBgImageOnAlpha: true,
        backgroundColor: "none",
        withWebp: true,
        tracedSVG: true,
        quality: 77,
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
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
