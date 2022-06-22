const JoiDate = require('@joi/date')
const Joi = require('joi').extend(JoiDate)
const validateCpf = require('./CpfValidation')

module.exports = async (req, res, next) => {
    try {

        const schema = Joi.object({
            name: Joi.string().required(),
            cpf: Joi.string().required().max(11),
            birthDay: Joi.date().format('DD/MM/YYYY').required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }).required(),
            password: Joi.string().alphanum().min(6).max(12).required(),
            canDrive: Joi.string().required().valid("yes", "no")
        })
        const { error } = await schema.validate(req.body, { abortEarly: true })
        if (error) {
            throw {
                message: 'Bad Request',
                details: [ {
                  message : error.message
                } ]
              };
            }
        if (!validateCpf(req.body.cpf)) {
            throw {
                message: 'Invalid CPF'
            }
        }
        
        return next()
    } catch (error) {
        return res.status(400).json(error)
    }
}