const RentalController = require('../app/controller/RentalController')

module.exports = (server, routes, prefix = "/api/v1/rental") => {
    routes.post("/", RentalController.create)
    routes.get("/", RentalController.list)
    routes.put("/:id",RentalController.update)
    routes.get("/:id", RentalController.getById)
    routes.delete("/:id", RentalController.delete)




    server.use(prefix, routes)
}
