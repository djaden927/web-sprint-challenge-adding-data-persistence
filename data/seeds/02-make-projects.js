const project = [
    {project_name: "big project name", project_description: "big project desc", project_completed: 0},
    {project_name: "big project name2", project_description: "big project desc2", project_completed: 1}
]

const resource = [
    {resource_name: "resource name", resource_description: "resource description"},
    {resource_name: "resource name2", resource_description: "resource description2"}
]

const task = [
    {
        task_description: "task desc",
        task_notes: "task notes",
        task_completed: 0,
        project_id: 1
    },
    {
        task_description: "task desc2",
        task_notes: "task notes2",
        task_completed: 1,
        project_id: 2
    }
]

exports.seed = async function (knex) {
    await knex('projects').insert(project)
    await knex('resources').insert(resource)
    await knex('tasks').insert(task)
    
}