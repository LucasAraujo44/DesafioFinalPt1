const Joi = require('joi')
const {isFilial} = require('../../Enum/enums')
const badRequest = require('../../Erros/badRequest')

module.exports = (req, res, next) => {
    try {

        const schema = Joi.object({
            name: Joi.string().trim().required(),
            cnpj: Joi.string().trim().required(),
            activities: Joi.string().trim().required(),
            address: Joi.array().required(),
            isFilial: Joi.string().valid(...isFilial)
        })
        const { error } = schema.validate(req.body, { abortEarly: true })
        if (error) {
            throw new badRequest(error.message)
        }
        return next()
    } catch (error) {
        return res.status(error.statusCode).json(error.message)

    }
}