const CarController = require('../app/controller/CarController')
const CarValidation = require('../app/validation/Car/CarValidation')

module.exports = (server, routes, prefix = "/api/v1/car") => {
    routes.post("/",CarValidation, CarController.create)
    routes.get("/", CarController.list)
    routes.put("/:id",CarValidation, CarController.update)
    routes.get("/:id", CarController.getById)
    routes.delete("/:id", CarController.delete)




    server.use(prefix, routes)
}
