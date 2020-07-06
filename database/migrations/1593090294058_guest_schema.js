'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GuestSchema extends Schema {
  up () {
    this.create('guests', (table) => {
      table.increments()
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.string('name')
      table.string('age')
      table.string('city')
      table.boolean('status').defaultTo("1")
      table.timestamps()
    })
  }

  down () {
    this.drop('guests')
  }
}

module.exports = GuestSchema
