const PersonService = require('../service/PersonService')

class PersonController {
    async create(req, res) {
        try {
            const result = await PersonService.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(error.statusCode).json({description: error.description, message: error.message})
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
    async update(req, res) {
        try {
            const result = await PersonService.updatePerson(
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
            return res.status(error.statusCode).json({ description: error.description, message: error.message })
        }
    }
    async getById(req, res) {
        try {
            const id = req.params.id
            const result = await PersonService.getById(id)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(error.statusCode).json({ description: error.description, message: error.message })
        }
    }
    async delete(req, res) {
        try {
            const result = await PersonService.deletePerson(req.params.id);
            return res.status(200).json({
                message: "Success",
                details: [
                    {
                        message: `The id_Person was successfully deleted`,
                    },
                ],
            });
        } catch (error) {
            return res.status(error.statusCode).json({ description: error.description, message: error.message })
        }
    }
}
module.exports = new PersonController()