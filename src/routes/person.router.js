const PersonController = require('../app/controller/PersonController')
const PersonValidation = require('../app/validation/Person/PersonValidation')

module.exports = (server, routes, prefix = "/api/v1/person") => {
  routes.post("/",PersonValidation, PersonController.create)
  routes.get("/", PersonController.list)
  routes.put("/:id",PersonValidation, PersonController.update)
  routes.get("/:id", PersonController.getById)
  routes.delete("/:id", PersonController.delete)




  server.use(prefix, routes)

}