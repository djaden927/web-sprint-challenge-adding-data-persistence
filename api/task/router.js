// build your `/api/tasks` router here
const express = require('express')
// const Task = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    console.log('task get')
    res.json({ api: 'task get'})
})

// router.post('/', (req, res) => {
//     console.log('task post')
// })

module.exports = router