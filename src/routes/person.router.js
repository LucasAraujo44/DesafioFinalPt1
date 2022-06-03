const PersonController = require("../app/controller/PersonController")

module.exports = (server, routes, prefix = "/api/v1/person") => {
  routes.post("/", PersonController.create)
  routes.get("/", PersonController.list)
  
  server.use(prefix, routes)

}