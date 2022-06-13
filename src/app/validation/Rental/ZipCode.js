const axios = require('axios')

class ZipCode {
    async findZipCode(zipCode) { 
        const dado = await axios.get(`https://viacep.com.br/ws/${zipCode}/json`)
        return dado.data

    }

}
module.exports = new ZipCode()