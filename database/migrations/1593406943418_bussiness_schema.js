'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BussinessSchema extends Schema {
  up () {
    this.create('bussinesses', (table) => {
      table.increments('id')
      table.string('name')
      table.boolean('status').defaultTo("0")
      table.timestamps()
    })
  }

  down () {
    this.drop('bussinesses')
  }
}

module.exports = BussinessSchema
