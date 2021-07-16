// build your `Resource` model here
const db = require('../../data/dbConfig')



function getResources() {
  return db('resources')
}

async function getResourceById(resource_id) {
  const resource = await db('resources')
    .where('resource_id', resource_id).first()
  return resource
}

async function create(resource) {

  const [id] = await db('resources').insert(resource)
  const newPost = await getResourceById(id)
  return newPost
}


module.exports = {
  getResources,
  create
}