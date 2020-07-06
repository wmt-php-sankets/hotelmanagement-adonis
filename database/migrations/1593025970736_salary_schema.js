'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalarySchema extends Schema {
  up () {
    this.create('salaries', (table) => {
      table.increments()
      table.string('amount');
      table.string('catagory');
      table.string('experance');
      table.boolean('status').defaultTo("1")
      table.timestamps()
    })
  }

  down () {
    this.drop('salaries')
  }
}

module.exports = SalarySchema
