const ReserveService = require('../service/ReserveService')

class ReserveController {
    async createReserve(req, res) {
        try {
            const id_rental = req.params.id
            const result = await ReserveService.createReserve({ id_rental: id_rental }, req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
    async listReserve(req, res) {
        try {
            const id_rental = req.params.id
            const result = await ReserveService.listReserve({ id_rental: id_rental }, req.query)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
    async updateReserve(req, res) {
        try {
            const id = req.params.id
            const result = await ReserveService.updateReserve({ _id: id }, req.body)
            if (result.matchedCount === 0) {
                res.status(404).json({ body: 'Not found: ' + id })
                return
            }
            res.status(200).json({ message: "Update is successfully " });
        } catch (error) {
            return res.status(400).json(error.message)

        }
    }
    async getByIdReserve(req, res) {
        try {
            const id = req.params.id
            const result = await ReserveService.getByIdReserve({ _id: id });
            if (!result) {
                res.status(404).json({ body: 'ID not found ' + id })
                return
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error.message);
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
            return res.status(400).json(error.message)
        } 
    }
}
module.exports = new ReserveController()