// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const {
    validatePost
} = require('./middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    Project.getProject()
        .then(projects => {
            projects.forEach(project => {
                if (project.project_completed === 0) {
                    project.project_completed = false
                } else if (project.project_completed === 1) {
                    project.project_completed = true
                }
            })
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/', validatePost, (req, res, next) => {
    Project.create(req.body)
        .then(newProject => {
            if (newProject.project_completed === 0) {
                newProject.project_completed = false
            } else {
                newProject.project_completed = true
            }
            res.status(201).json(newProject)
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