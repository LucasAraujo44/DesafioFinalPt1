const Joi = require('joi')

module.exports =  (req, res, next) => {
    try {
        const schema  = Joi.object({
            model: Joi.string().required(),
            type: Joi.string().required(),
            brand: Joi.string().required(),
            color: Joi.string().required(),
            year: Joi.number().integer().required().min(1950).max(2022),
            accessories: Joi.array().unique().required(),
            passengersQtd: Joi.number().integer().required().min(1).max(5),

        })
        const { error } = schema.validate(req.body, { abortEarl: true })
        if (error) {
            throw {
                message: 'Bad Request',
                details: [ {
                  message : error.message
                } ]
              };
            }
        return next()
    } catch (error) {
        return res.status(400).json(error)
    }
}