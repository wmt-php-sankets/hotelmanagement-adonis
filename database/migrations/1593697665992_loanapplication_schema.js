'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
class LoanapplicationSchema extends Schema {
  up () {
    this.create('loanapplications', (table) => {
      table.increments()
      table.integer('loan_status_manage_id').unsigned();
      table.foreign('loan_status_manage_id').references('loan_status_manages.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.timestamps()
    })
  }

  down () {
    this.drop('loanapplications')
  }
}

module.exports = LoanapplicationSchema
