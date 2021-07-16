// build your `/api/resources` router here
const express = require('express')
// const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    console.log('resource get')
    res.json({ api: 'resource get'})
})

// router.post('/', (req, res) => {
//     console.log('resource post')
// })

module.exports = router