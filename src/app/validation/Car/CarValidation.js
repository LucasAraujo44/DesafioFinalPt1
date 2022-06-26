const Joi = require('joi')
const badRequest = require('../../Erros/badRequest')

module.exports =  (req, res, next) => {
    try {
        const schema  = Joi.object({
            model: Joi.string().trim().required(),
            type: Joi.string().trim().required(),
            brand: Joi.string().trim().required(),
            color: Joi.string().trim().required(),
            year: Joi.number().integer().min(1950).max(2022).required(),
            accessories: Joi.array().unique().min(1).required(),
            passengersQtd: Joi.number().integer().min(1).max(5).required(),

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