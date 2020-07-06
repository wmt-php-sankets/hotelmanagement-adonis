'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LoanSchema extends Schema {
  up() {
    this.create('loans', (table) => {
      table.increments()
      table.string('name')
      table.integer('people_id').unsigned();
      table.foreign('people_id').references('people.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.boolean('status').defaultTo("1")
      table.timestamps()
    })
  }
  down() {
    this.drop('loans')
  }
}

module.exports = LoanSchema
