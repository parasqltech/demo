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
        baseUrl: 'admin.qltech.com.au',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: true,
		
		
		
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
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            path: node => node.frontmatter.path,
          },
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) =>
          node.frontmatter.tags !== 'exempt',
      },
    },
	{
    resolve: `gatsby-plugin-nprogress`,
    options: {
      // Setting a color is optional.
      color: "#1d73bd",
      // Disable the loading spinner.
      showSpinner: true,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
        },
        `gatsby-remark-lazy-load`,
      ]
    }
  },
  {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
			variants: [`100`, `100i`, `300`, `300i`, `400`, `400i`, `500`, `500i`, `700`, `700i`, `900`, `900i`],
          }
        ],
      }
    },
  {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        custom: `
            <IfModule mod_expires.c>
			  ExpiresActive On

			  # Images
			  ExpiresByType image/jpeg "access plus 1 year"
			  ExpiresByType image/gif "access plus 1 year"
			  ExpiresByType image/png "access plus 1 year"
			  ExpiresByType image/webp "access plus 1 year"
			  ExpiresByType image/svg+xml "access plus 1 year"
			  ExpiresByType image/x-icon "access plus 1 year"

			  # Video
			  ExpiresByType video/mp4 "access plus 1 year"
			  ExpiresByType video/mpeg "access plus 1 year"

			  # CSS, JavaScript
			  ExpiresByType text/css "access plus 1 month"
			  ExpiresByType text/javascript "access plus 1 month"
			  ExpiresByType application/javascript "access plus 1 month"

			  # Others
			  ExpiresByType application/pdf "access plus 1 month"
			  ExpiresByType application/x-shockwave-flash "access plus 1 month"
			</IfModule>
        `,
      },
    },
	{
      resolve: 'gatsby-plugin-robots-txt',
      options: {
		sitemap: 'https://www.qltech.com.au/sitemap.xml',
        policy: [{ userAgent: '*', disallow: ['/404/','/cgi-bin/'] }]
      }
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
