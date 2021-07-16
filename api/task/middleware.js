// const Task = require('./model')

// const descriptionLookup = (req, res, next) => {
//     Task.getTasks()
//         .then(tasks => {
//             tasks.forEach(task => {
//                 if(task.task_completed === 0){
//                     task.task_completed = false
//                 } else if(task.task_completed === 1){
//                     task.task_completed = true
//                 }
//             })
//             next()
//         })
//     .catch(next)
// }

const validatePost = (req, res, next) => {
    if(!req.body.task_description || !req.body.project_id){
        next({
            status: 400,
            message: "missing task description or project id"
        })
    } else{
        next()
    }
    
}

const errorHandling = (err, req, res, next) => { // eslint-disable-line
    const status = err.status || 500
    res.status(status).json({
      message: err.message,
    })
  }


module.exports ={
    validatePost

}