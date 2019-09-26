const _ = require('lodash')
const path = require('path')
const slash = require('slash')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const pageTemplate = path.resolve(`./src/templates/page.js`)

      // Only publish pages with a `status === 'publish'` in production. This
      // excludes drafts, future posts, etc. They will appear in development,
      // but not in a production build.

      const allPages = result.data.allWordpressPage.edges
      const pages =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPages)
          : allPages

      // Call `createPage()` once per WordPress page
      _.each(pages, ({ node: page }) => {
        createPage({
          path: `/${page.slug}/`,
          component: pageTemplate,
          context: {
            id: page.id,
          },
        })
      })
    })
	.then(() => {
      return graphql(`
         {
      allWordpressWpEvents {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWordpressWpEvents } = result.data
		 const eventTemplate = path.resolve(`./src/templates/single-event.js`)
		  // We want to create a detailed page for each
		  // post node. We'll just use the WordPress Slug for the slug.
		  // The Post ID is prefixed with 'POST_'
		  allWordpressWpEvents.edges.forEach(edge => {
			createPage({
			  path: `/event/${edge.node.slug}/`,
			  component: slash(eventTemplate),
			  context: {
				id: edge.node.id,
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWordpressWpWorks {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWordpressWpWorks } = result.data
		 const workTemplate = path.resolve(`./src/templates/single-work.js`);
		  allWordpressWpWorks.edges.forEach(edge => {
			createPage({
			  path: `/work/${edge.node.slug}/`,
			  component: slash(workTemplate),
			  context: {
				id: edge.node.id,
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWordpressWpIndustries {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWordpressWpIndustries } = result.data
		 const industriesTemplate = path.resolve(`./src/templates/single-industries.js`);
		  allWordpressWpIndustries.edges.forEach(edge => {
			createPage({
			  path: `/industries/${edge.node.slug}/`,
			  component: slash(industriesTemplate),
			  context: {
				id: edge.node.id,
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWordpressWpPlatform {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWordpressWpPlatform } = result.data
		 const platformsTemplate = path.resolve(`./src/templates/single-platforms.js`);
		  allWordpressWpPlatform.edges.forEach(edge => {
			createPage({
			  path: `/platforms/${edge.node.slug}/`,
			  component: slash(platformsTemplate),
			  context: {
				id: edge.node.id,
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWordpressWpServices {
        edges {
          node {
            id
            slug
			acf {
				service_slug
			}
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWordpressWpServices } = result.data
		 const platformsTemplate = path.resolve(`./src/templates/single-service.js`);
		  allWordpressWpServices.edges.forEach(edge => {
			  
			createPage({
			  path: `/services/${edge.node.slug}/`,
			  component: slash(platformsTemplate),
			  context: {
				id: edge.node.id,
				catslug: `/${edge.node.acf.service_slug}/`,
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWordpressWpProcess {
        edges {
          node {
            id
            slug
			acf {
				service_slug
			}
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWordpressWpProcess } = result.data
		 const processTemplate = path.resolve(`./src/templates/single-process.js`);
		  allWordpressWpProcess.edges.forEach(edge => {
			  
			createPage({
			  path: `/process/${edge.node.slug}/`,
			  component: slash(processTemplate),
			  context: {
				id: edge.node.id,
				catslug: `/${edge.node.acf.service_slug}/`,
			  },
			})
		  })
	 
	 
    })
	.then(() => {
      return graphql(`
         {
      allWordpressPost{
        edges {
          node {
            id
            slug
			
          }
        }
      }
    }
      `)
    })
	.then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
		const { allWordpressPost } = result.data
		 const blogTemplate = path.resolve(`./src/templates/single-blog.js`);
		  allWordpressPost.edges.forEach(edge => {
			  
			createPage({
			  path: `/blog/${edge.node.slug}/`,
			  component: slash(blogTemplate),
			  context: {
				id: edge.node.id,
			  },
			})
		  })
	 
	 
    })
	
	
	
	
	
}
















exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
	  const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
	  
	  
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /isotope-layout/,
            use: loaders.null(),
          },
		  {
            test: /react-typing-effect/,
            use: loaders.null(),
          }	
		  
		  
        ]
      },
    })
  }
}

