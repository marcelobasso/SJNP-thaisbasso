/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `./src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `fonts`,
                path: `./src/fonts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `./src/`,
            },
        },
        "gatsby-plugin-react-svg",
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                query: `
                    {
                        site {
                            siteMetadata {
                                siteUrl
                            }
                        }
                        allSitePage {
                            nodes {
                                path
                                pageContext
                            }
                        }
                    }
                `,
                serialize: ({ path, pageContext }) => {
                    return {
                        url: path,
                        lastmod: pageContext?.lastMod,
                    };
                },
            },
        },
        `gatsby-plugin-git-lastmod`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://sejarealnaoperfeito.com.br',
                policy: [{userAgent: '*', allow: '/'}]
            }
        },
        'gatsby-plugin-cname'
    ],

    siteMetadata: {
        title: "Seja Real Não Perfeito | Thaís Basso",
        description: "Uma comunidade sobre saúde, nutrição e estilo de vida, baseada em evidências.",
        canonical: "https://sejarealnaoperfeito.com.br",
        siteUrl: "https://sejarealnaoperfeito.com.br",
        author: "marceloBasso",
    },
};
