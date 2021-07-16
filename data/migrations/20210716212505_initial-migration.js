
exports.up = async function (knex) {
  await knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id')
      tbl.string('project_name', 200).notNullable()
      tbl.string('project_description', 200)
      tbl.integer('project_completed').defaultTo(0)
    })
    .createTable('resources', table => {
      table.increments('resource_id')
      table.string('resource_name', 200).notNullable().unique()
      table.string('resource_description', 50)
    })
    .createTable('tasks', table => {
      table.increments('task_id')
      table.string('task_description', 200).notNullable()
      table.string('task_notes')
      table.integer('task_completed',).defaultTo(0)
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
};

exports.down = async function (knex) {
  await knex.schema
    // .dropTableIfExists('step_ingredients')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
