'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Guest extends Model {

  rooms() {
    return this.belongsToMany('App/Models/Room', 'guest_id', 'room_id', 'id', 'id').pivotTable('guest_rooms')
  }
  user() {
    return this.belongsTo('App/Models/User')
  } 
}

module.exports = Guest
