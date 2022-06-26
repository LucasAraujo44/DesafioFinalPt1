const RentalController = require('../app/controller/RentalController')
const RentalValidation = require('../app/validation/Rental/RentalValidation')
module.exports = (server, routes, prefix = "/api/v1/rental") => {
    routes.post("/",RentalValidation, RentalController.create)
    routes.get("/", RentalController.list)
    routes.put("/:id",RentalValidation,RentalController.update)
    routes.get("/:id", RentalController.getById)
    routes.delete("/:id", RentalController.delete)

    server.use(prefix, routes)
}
