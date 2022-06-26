const ReserveService = require('../service/ReserveService')

class ReserveController {
    async createReserve(req, res) {
        try {
            const id_rental = req.params.id
            const result = await ReserveService.createReserve({id_rental}, req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
    async listReserve(req, res) {
        try {
            const id_rental = req.params.id
            const result = await ReserveService.listReserve({id_rental}, req.query)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
    async updateReserve(req, res) {
        try {
            const result = await ReserveService.updateReserve(
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
            })
        } catch (error) {
            return res.status(error.statusCode).json({description: error.description, message: error.message})
        }
    }
    async getByIdReserve(req, res) {
        try {
            const id = req.params.id
            const result = await ReserveService.getByIdReserve(id);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(error.statusCode).json({description: error.description, message: error.message})
        }
    }
    async deleteReserve(req, res) {
        try {
            const result = await ReserveService.deleteReserve(req.params.id);
            return res.status(200).json({
                message: "Success",
                details: [
                    {
                        message: `The id_Reserve was successfully deleted`,
                    }
                ]
            })
        } catch (error) {
            return res.status(error.statusCode).json({description: error.description, message: error.message})

        } 
    }
}
module.exports = new ReserveController()