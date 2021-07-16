// build your `Task` model here
const db = require('../../data/dbConfig')



function getTasks() {
  return db('tasks')
}

async function getTaskById(task_id){
  const task = await db('tasks')
  .where('task_id', task_id).first()
  return task
}

async function create(task) {
  
  const [id] = await db('tasks').insert(task)
  const newPost = await getTaskById(id)
  return newPost
}

  
module.exports = {
    getTasks,
    create
}