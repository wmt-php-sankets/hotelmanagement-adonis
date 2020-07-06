'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentSchema extends Schema {
  up() {
    this.create('payments', (table) => {
      table.increments()
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.string('amounts');
      table.boolean('status').defaultTo("1")
      table.timestamps()
    })
  }
  down() {
    this.drop('payments')
  }
}

module.exports = PaymentSchema
