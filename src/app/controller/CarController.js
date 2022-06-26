const CarService = require('../service/CarService')

class CarController {
    async create(req, res) {
        try {
            const result = await CarService.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(error.statusCode).json({description: error.description, message: error.message})
        }
    }
    async list(req, res) {
        try {
            const result = await CarService.list(req.query)
            if (result === 0) {
                res.status(204).json({ message: "server has successfully fulfilled the request and that there is no content to send in the response payload body" })
            }
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
    async update(req, res) {
        try {
            const result = await CarService.updateCar(
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
    async getById(req, res) {
        try {
            const id = req.params.id
            const result = await CarService.getById(id)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(error.statusCode).json({ description: error.description, message: error.message })
        }
    }
    async delete(req, res) {
        try {
            const result = await CarService.deleteCar(req.params.id);
            return res.status(200).json({
                message: "Success",
                details: [
                    {
                        message: `The id was successfully deleted`,
                    },
                ],
            });
        } catch (error) {
            return res.status(error.statusCode).json({ description: error.description, message: error.message })
        }
    }

}
module.exports = new CarController()