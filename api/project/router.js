// build your `/api/projects` router here
const express = require('express')
// const Project = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    console.log('project get')
    res.json({ api: 'project get'})
})

// router.post('/', (req, res) => {
//     console.log('project post')
// })

module.exports = router