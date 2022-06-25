const FleetService = require('../service/FleetService')

class FleetController {
    async create(req, res) {
        try {
            const id_rental = req.params.id
            const result = await FleetService.create({ id_rental: id_rental }, req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error)        }
    }
    async listFleet(req, res) {
        try {
            const id_rental = req.params.id
            const result = await FleetService.listFleet({ id_rental: id_rental }, req.query)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
    async updateFleet(req, res) {
        try {
            const result = await FleetService.updateFleet(
                req.params.id,
                req.body
            );
            return res.status(200).json({
                message: "Success",
                details: [
                    {
                        message: `The id was successfully Updated`,
                    },
                ],
            });
        } catch (error) {
            return res.status(error.statusCode).json({ description: error.description, message: error.message })
        }
    }
    async getByIdFleet(req, res) {
        try {
            const id = req.params.id
            const result = await FleetService.getByIdFleet(id);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(error.statusCode).json({ description: error.description, message: error.message })
        }
    }
    async deleteFleet(req, res) {
        try {
            const result = await FleetService.deleteFleet(req.params.id);
            return res.status(200).json({
                message: "Success",
                details: [
                    {
                        message: `The id_Fleet was successfully deleted`,
                    },
                ],
            });
        } catch (error) {
            return res.status(error.statusCode).json({ description: error.description, message: error.message })
        }
    }
}
module.exports = new FleetController()
