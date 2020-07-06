'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LoanStatusManageSchema extends Schema {
  up () {
    this.create('loan_status_manages', (table) => {
      table.increments()
      table.integer('loan_status_id').unsigned();
      table.foreign('loan_status_id').references('loanstatuses.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.enu('currentstage', ['loanapppication', 'veeting','disbursment'])
      table.timestamps()
    })
  }

  down () {
    this.drop('loan_status_manages')
  }
}

module.exports = LoanStatusManageSchema
