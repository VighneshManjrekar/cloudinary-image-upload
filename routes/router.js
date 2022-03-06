const routes = require('express').Router()
const controller = require('../controllers/main')

routes.get('/',controller.getRoot)

routes.post('/upload',controller.postImage)

module.exports = routes