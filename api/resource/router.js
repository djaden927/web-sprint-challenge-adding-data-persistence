// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Resource.getResources()
        .then(resources => {

            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.create(req.body)
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    console.log("router error")
    res.status(500).json({
        customMessage: 'something went wrong',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router