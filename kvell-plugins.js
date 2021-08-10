module.exports = {
    databasePlugins: [
        {
            resolve: "kvell-db-plugin-mongoose",
            options: {
                mongoConnectionString: "mongodb+srv://Nimain:LFtVhP0vWGGbLdkL@cluster0-jybkn.mongodb.net/sportcafe?_retryWrites=true&w=majority",
                options: {},
                showConnectionMessage: true
            }
        }
    ]
};
