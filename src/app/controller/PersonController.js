const PersonService = require('../service/PersonService')

class PersonController {
    async create(req, res) {
        try {
            const result = await PersonService.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async list(req, res) {
        try {
            const result = await PersonService.list(req.query)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400)
        }

    }
}
module.exports = new PersonController()