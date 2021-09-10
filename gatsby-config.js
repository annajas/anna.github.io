module.exports = {
  pathPrefix: "/anna.github.io",
  siteMetadata: {
    title: "Anna Jasinska",
    description: "Architect, Designer, and Photographer",
    url: "https://www.doe.com", // No trailing slash allowed!
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
    // `gatsby-plugin-netlify-cms`
  ],
};
