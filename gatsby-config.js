module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "vaughanstedman.com",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
