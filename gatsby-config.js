module.exports = {
  siteMetadata: {
    title: `Macaron Canary`,
    description: `A warrant canary project.`,
    author: `@_llzes`,
    siteUrl: `https://macaroncanary.com`,
    twitter: `@macaroncanary`
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
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MacaronCanary`,
        short_name: `www`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/vectors/logo.png`,
      },
    },
  ],
}
