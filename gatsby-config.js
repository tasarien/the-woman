module.exports = {
  siteMetadata: {
    title: "TheWomen",
  },
  plugins: [
    "gatsby-plugin-styled-components", {
    resolve: "gatsby-source-graphql",
    options: {
      // Arbitrary name for the remote schema Query type
      typeName: "IZBL",
      // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
      fieldName: "izbl",
      // Url to query from
      url: "https://api-eu-central-1.graphcms.com/v2/ckjfcvcl5yqvr01xp7q8sdz9c/master",
    },
  },],

};
