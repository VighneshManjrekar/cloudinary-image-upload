require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const routes = require('./routes/router')
app.use(routes)

mongoose
    .connect(process.env.MONGO_URI)
    .then((result) => {
        console.log('DB Connected!')
        app.listen('7030', () => {
            console.log('Server running!')
        })
    })
    .catch((err) => {
        console.log(err)
    })