const CarService = require('../service/CarService')

class CarController {
    async create(req, res) {
        try {
            const result = await CarService.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async list(req, res) {
        try {
            const result = await CarService.list(req.query)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400)
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
            });
        } catch (error) {
            return res.status(400).json({
                message: "Bad Request",
                details: [
                    {
                        message: error.message,
                    },
                ],
            });
        }
    }
    async getById(req, res) {
        try {
            const result = await CarService.getById(req.params.id);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({
                message: "Bad Request ID no parameter",
            });
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
          return res.status(400).json({
            message: "Success",
            details: [
              {
                message: `Id not found`,
              },
            ],
          });
        }
      }

}
module.exports = new CarController()