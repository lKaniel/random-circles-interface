module.exports = {
    siteMetadata: {
        title: "Kaniel's starter",
        description: "Kaniel's starter website",
        lang: "en"
    },
    plugins: [
        {
            resolve: `gatsby-plugin-react-redux`,
            options: {
                pathToCreateStoreModule: './src/store/createStore',
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {}
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: "Comfortaa",
                            variants: ["300", "400", "700", "900"],
                            subsets: ["latin", "cyrillic"]
                        },
                    ],
                },
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/Layout`),
            },
        },
    ],
}
