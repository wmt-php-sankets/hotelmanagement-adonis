'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HaptaSchema extends Schema {
  up () {
    this.create('haptas', (table) => {
      table.increments()
      table.integer('loan_id').unsigned();
      table.foreign('loan_id').references('loans.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.string('name')
      table.string('price')
      table.boolean('status').defaultTo("1")
      table.timestamps()
    })
  }
  down () {
    this.drop('haptas')
  }
}

module.exports = HaptaSchema
