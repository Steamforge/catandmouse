/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Skip Game',
    description: 'Skip Game Project',
    author: '@steamforge',
    siteUrl: 'https://matermind.studley.dev/',
    image: `src/images/studley-share.png`,
    lang: `en`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@import "./src/styles/variables";`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'skip-game',
        short_name: 'skip-game',
        start_url: '/',
        background_color: '#31353D',
        theme_color: '#31353D',
        display: 'minimal-ui',
        icon: 'src/images/studley-icon.png', // This path is relative to the root of the site.
      },
    },    
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Open Sans',
              variants: ['400', '700', '900'],
            },
          ],
        },
      },
    },
  ],
};
