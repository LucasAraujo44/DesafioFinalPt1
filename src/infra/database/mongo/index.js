const mongoose = require('mongoose')
const config = require('../../../config/config')
require('dotenv').config()

class Database{
    connect(){
        return mongoose.connect
        (process.env.DB_MONGO,
        {
            user: config.database.username,
            pass: config.database.password
        })
    }
}
module.exports = new Database().connect()