'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WorkerSchema extends Schema {
  up () {
    this.create('workers', (table) => {
      table.increments()
     table.string('name')
     table.integer('salary_id').unsigned();
     table.foreign('salary_id').references('salaries.id').onDelete('CASCADE').onUpdate('CASCADE');
     table.string('age')
     table.boolean('status').defaultTo("1")
      table.timestamps()
    })
  }

  down () {
    this.drop('workers')
  }
}

module.exports = WorkerSchema
