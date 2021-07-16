
const validatePost = (req, res, next) => {
    if (!req.body.task_description || !req.body.project_id) {
        next({
            status: 400,
            message: "missing task description or project id"
        })
    } else {
        next()
    }

}

const errorHandling = (err, req, res, next) => { // eslint-disable-line
    const status = err.status || 500
    res.status(status).json({
        message: err.message,
    })
}


module.exports = {
    validatePost

}