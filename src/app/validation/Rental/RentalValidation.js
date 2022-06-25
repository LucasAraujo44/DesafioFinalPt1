const Joi = require('joi')
const {isFilial} = require('../../Enum/enums')

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
            throw {
                message: 'Bad Request',
                details: [{
                    message: error.message
                }]
            };
        }
        return next()
    } catch (error) {
        return res.status(400).json(error)
    }
}