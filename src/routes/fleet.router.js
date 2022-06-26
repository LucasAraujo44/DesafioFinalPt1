const FleetController = require('../app/controller/FleetController')

module.exports = (server, routes, prefix = "/api/v1/rental") => {
routes.post("/:id/fleet", FleetController.create)
routes.get("/:id/fleet", FleetController.listFleet)
routes.put("/:id/fleet/:id", FleetController.updateFleet)
routes.get("/:id/fleet/:id", FleetController.getByIdFleet)
routes.delete("/:id/fleet/:id", FleetController.deleteFleet)

server.use(prefix, routes)
}