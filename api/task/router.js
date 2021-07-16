// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const {
    validatePost
} = require('./middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(tasks => {
            tasks.forEach(task => {
                if(task.task_completed === 0){
                    task.task_completed = false
                } else if(task.task_completed === 1){
                    task.task_completed = true
                }
            })
            res.status(200).json(tasks)
        })
    .catch(next)
})

router.post('/', validatePost, (req, res, next) => {
    Task.create(req.body)
        .then(newtask => {
            if(newtask.task_completed === 0){
                newtask.task_completed = false
            } else{
                newtask.task_completed = true
            }
            res.status(201).json(newtask)
        })
        .catch(next)
})

module.exports = router