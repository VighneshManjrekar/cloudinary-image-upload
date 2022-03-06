const routes = require('express').Router()
const controller = require('../controller/main')

routes.get('/',controller.getRoot)

routes.post('/upload',controller.postImage)

module.exports = routes