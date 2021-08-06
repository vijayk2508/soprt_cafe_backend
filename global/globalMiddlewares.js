const bodyParser = require("body-parser");
const cors = require("cors");
const static = require("kvell-scripts").static;
const middlewares = require("../utils/middleware");
const routes = require("../routes");
const path = require("path");

/**
 * `globalMiddlewares` handles all the middlewares/functions/configurations that you need
 * to declare/use in your application globally.
 * @param {import ("kvell-scripts").KvellAppObject} app
 * @param {import ("kvell-scripts").KvellServerObject} server
 */
const globalMiddlewares = (app, server) => {
    app.use(middlewares.formidable, bodyParser.json(), bodyParser.urlencoded({ extended: true }));
    app.use("/static", static(path.join(__dirname, "..", "public")));
    app.use("/article", routes.article);
    app.use(middlewares.auth); // middleware to validate authenticated users


};

module.exports = globalMiddlewares;
