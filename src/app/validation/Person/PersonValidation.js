const JoiDate = require('@joi/date')
const Joi = require('joi').extend(JoiDate)
const validateCpf = require('./CpfValidation')
const {canDrive} = require('../../Enum/enums')
const {email} = require('../../Enum/enums')

module.exports = async (req, res, next) => {
    try {

        const schema = Joi.object({
            name: Joi.string().trim().required(),
            cpf: Joi.string().max(11).required(),
            birthDay: Joi.date().format('DD/MM/YYYY').required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: [...email] } }).required(),
            password: Joi.string().alphanum().min(6).max(12).required(),
            canDrive: Joi.string().valid(...canDrive).required()
        })
        const { error } = await schema.validate(req.body, { abortEarly: true })
        if (error) {
            throw {
                message: 'Bad Request',
                details: [{
                    message: error.message
                }]
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