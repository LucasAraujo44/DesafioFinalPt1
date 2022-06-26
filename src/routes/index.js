const { Router } = require('express')
const car = require('./car.router')
const person = require('./person.router')
const auth = require('./auth.router')
const rental = require('./rental.router')
const fleet = require('./fleet.router')
const reserve = require('./reserve.router')

module.exports = (server) => {
    server.use((req, res, next) => {
        car(server, new Router())
        next()
    })
    server.use((req, res, next) => {
        person(server, new Router())
        next()
    })
    server.use((req, res, next) =>{
        auth(server, new Router())
        next()
    })
    server.use((req, res, next)=>{
        rental(server, new Router())
        next()
    })
    server.use((req, res, next)=>{
        fleet(server, new Router())
        next()
    })
    server.use((req, res, next)=>{
        reserve(server, new Router())
        next()
    })
}