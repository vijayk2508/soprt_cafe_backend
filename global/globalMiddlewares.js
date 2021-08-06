/**
 * `globalMiddlewares` handles all the middlewares/functions/configurations that you need
 * to declare/use in your application globally.
 * @param {import ("kvell-scripts").KvellAppObject} app
 * @param {import ("kvell-scripts").KvellServerObject} server
 */
// const globalMiddlewares = (app, server) => {};

// module.exports = globalMiddlewares;

// `global/globalMiddlewares.js`

// const middlewares = require("../utils/middlewares");
const routes = require("../routes");

/**
 * `globalMiddlewares` handles all the middlewares/functions/configurations that you need
 * to declare/use in your application globally.
 * @param {import ("kvell-scripts").KvellAppObject} app
 * @param {import ("kvell-scripts").KvellServerObject} server
 */
const globalMiddlewares = (app, server) => {
    app.use("/article", routes.article);


    //app.use(middlewares.auth); // middleware to validate authenticated users


};

module.exports = globalMiddlewares;
