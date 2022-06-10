const RentalService = require('../service/RentalService')

class RentalController {
    async create(req, res) {
        try {
            const result = await RentalService.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async list(req, res) {
        try {
            const result = await RentalService.list(req.query)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400)
        }

    }
    async update(req, res) {
        try {
            const result = await RentalService.updateRental(
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
                        message: "The id_Car not params",
                    },
                ],
            });
        }
    }
    async getById(req, res) {
        try {
            const id = req.params.id
            const result = await RentalService.getById({_id: id});
            if(!result){
                res.status(404).json({ body: 'ID not found ' + id })
                return
            }
            return res.status(200).json(result);
        } catch (error) { 
            return res.status(400).json({
                message: "Bad Request ID no parameter",
            });
        }
    }
    async delete(req, res) {
        try {
          const result = await RentalService.deleteRental(req.params.id);
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
module.exports = new RentalController()