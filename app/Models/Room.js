'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Config = use('Config')
class Room extends Model {
  getStatus(status) {
    if (status == 1) {
      return Config.get("local.room.1");;
    }
    return Config.get("local.room.0");
  }
  guests() {
    return this.belongsToMany('App/Models/Room', 'room_id', 'guest_id', 'id', 'id').pivotTable('guest_rooms')
  }
}

module.exports = Room
