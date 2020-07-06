'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GuestRoomSchema extends Schema {
  up() {
    this.create('guest_rooms', (table) => {

      table.increments()

      table.integer('room_id').unsigned();
      table.foreign('room_id').references('rooms.id').onDelete('CASCADE').onUpdate('CASCADE');

      table.integer('guest_id').unsigned();
      table.foreign('guest_id').references('guests.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.timestamps()
    })
  }

  down() {
    this.drop('guest_rooms')
  }
}

module.exports = GuestRoomSchema
