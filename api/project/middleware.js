
const validatePost = (req, res, next) => {
    if (!req.body.project_name) {
        next({
            status: 400,
            message: "invalid project name"
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