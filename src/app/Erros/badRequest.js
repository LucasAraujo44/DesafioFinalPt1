class badRequest extends Error {
    constructor(payload) {
        super(`Bad request ${payload} `)
        this.statusCode = 400
        this.description = 'Bad request'
    }

}
module.exports = badRequest