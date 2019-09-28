module.exports = {
  siteMetadata: {
    title: 'QL Tech',
	siteUrl: 'https://www.qltech.com.au',
	description: `Web Development & Digital Marketing Services In Perth, Australia - QL Tech`,
    author: `@qltechau`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
	{
		resolve: 'gatsby-plugin-react-helmet-canonical-urls',
		options: {
		  siteUrl: 'https://www.qltech.com.au',
		},
	},
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'qltech.io',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
		
		
		
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugin
	{
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'qltechau'
      }
    },
	{
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-WKD5LWX",

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },
    },
  },
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      output: `/sitemap.xml`,
    }
  },
  {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        custom: `
            ExpiresActive On
			  ExpiresByType image/jpeg "access plus 1 year"
			  ExpiresByType image/gif "access plus 1 year"
			  ExpiresByType image/png "access plus 1 year"
			  ExpiresByType image/webp "access plus 1 year"
			  ExpiresByType image/svg+xml "access plus 1 year"
			  ExpiresByType image/x-icon "access plus 1 year"
			  ExpiresByType video/mp4 "access plus 1 year"
			  ExpiresByType video/mpeg "access plus 1 year"
			  ExpiresByType text/css "access plus 1 month"
			  ExpiresByType text/javascript "access plus 1 month"
			  ExpiresByType application/pdf "access plus 1 month"
			  ExpiresByType application/x-shockwave-flash "access plus 1 month"
        `,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
