const articleRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const articleController = require("../controllers").article;

articleRouter.get("/", (request, response) => {
  // get method
});

articleRouter.post("/", (request, response) => {
  // post method
});

articleRouter.put("/", (request, response) => {
  // put method
});

articleRouter.delete("/", (request, response) => {
  // delete method
});

module.exports = articleRouter;