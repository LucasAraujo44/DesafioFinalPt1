class IdNotFound extends Error {
    constructor(id) {
        super(`Id ${id} not found`)
        this.statusCode = 404
        this.description = 'Not Found'
    }

}
module.exports = IdNotFound