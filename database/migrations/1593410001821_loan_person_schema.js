'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LoanPersonSchema extends Schema {
  up () {
    this.create('loan_people', (table) => {
      table.increments()
      table.integer('loan_id').unsigned();
      table.foreign('loan_id').references('loans.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.integer('people_id').unsigned();
      table.foreign('people_id').references('people.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.timestamps()
    })
  }

  down () {
    this.drop('loan_people')
  }
}

module.exports = LoanPersonSchema
