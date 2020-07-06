'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LoanstatusSchema extends Schema {
  up () {
    this.create('loanstatuses', (table) => {
      table.increments()
      table.string('name');
      table.timestamps()
    })
  }

  down () {
    this.drop('loanstatuses')
  }
}

module.exports = LoanstatusSchema
