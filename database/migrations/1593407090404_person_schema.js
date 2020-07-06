'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonSchema extends Schema {
  up() {
    this.create('people', (table) => {
      table.increments()
      table.string('name')
      table.integer('bussiness_id').unsigned();
      table.foreign('bussiness_id').references('bussinesses.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.boolean('status').defaultTo("1")
      table.timestamps()
    })
  }

  down() {
    this.drop('people')
  }
}

module.exports = PersonSchema
