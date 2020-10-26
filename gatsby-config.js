module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "vaughanstedman.com",
        protocol: "https",
        hostname: "www.vaughanstedman.com",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
