const app = require('./app')
const swaggerUi = require('swagger-ui-express')
require('dotenv').config()
const swaggerDocs = require('../swagger.json')
const port = process.env.PORT || 3000

app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.listen(port, ()=>{
    console.log('Running in port 3000 !!')
})