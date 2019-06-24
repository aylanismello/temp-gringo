const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/blog-post.js");
    // const countryTemplate = path.resolve('./src/templates/country.js');
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulBlogPost.edges;
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            }
          });
        });

        // for country pages
        // graphql(
        //   `
        //     {
        //       allContentfulCountry {
        //         edges {
        //           node {
        //             name
        //             flag
        //           }
        //         }
        //       }
        //     }
        //   `
        // ).then(results => {
        //   const countries = results.data.allContentfulCountry.edges;

        //   countries.forEach((country, index) => {
        //     const name = country.node.name.toLowerCase();
        //     createPage({
        //       path: `/countries/${name}/`,
        //       component: countryTemplate,
        //       context: {
        //         name: country.node.name
        //       }
        //     });
        //   });
        // });
      })
    );
  });
};
