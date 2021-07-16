// build your `Project` model here
const db = require('../../data/dbConfig')



function getProject() {
    return db('projects')
}

async function getProjectById(project_id) {
    const project = await db('projects')
        .where('project_id', project_id).first()
    return project
}

async function create(project) {

    const [id] = await db('projects').insert(project)
    const newPost = await getProjectById(id)
    return newPost
}


module.exports = {
    getProject,
    create
}