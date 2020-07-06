'use strict'
const { validate } = use('Validator')
//model
const User = use('App/Models/User')
const Worker = use('App/Models/Worker')
const Room = use('App/Models/Room')
const Guest = use('App/Models/Guest')
//database
const Database = use('Database')
//config
const Config = use('Config')
//mail
const Mail = use('Mail')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with rooms
 */
class RoomController {
  /**
   * Show a list of all rooms.
   * GET rooms
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view, auth }) {
    const user = await auth.getUser();
    if (user) {
      const avalableroom = await Room.all();
      return avalableroom
    }
  }

  /**
   * Render a form to be used for creating a new room.
   * GET rooms/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async booking({ request, response, view, params, auth }) {

    const id = params.id
    const user = await auth.getUser();
    const authantication = await User.query().where('role', 'guest').where('email', user.email).fetch();

    if (!authantication == '') {
      const check = await Room.query().where('id', id).where('status', 1).fetch();

      if (check) {
        const book = await Room.query().where('id', id).where('status', 1).update({ 'status': '0' })
        const bookingdetails = await Room.query().where('id', id).select('room_number', 'day_1_price', 'ratting', 'capacity', 'created_at').first()

        const adddata = await Guest.query().where('user_id', user.id).first();
        adddata.rooms().attach(id)

        await Mail.send('guest/roomdetails', { bookingdetails, user }, (message) => {
          message
            .to('spider@gmail.com')
            .from('spider@gmail.com')
            .subject('Room booking details')
        })
        return response.json({
          message: user.username + "   booked this room " + "thank you for purchess room",
          data: bookingdetails
        });
      }
      return response.json({
        message: "booking is already done so not purchase"
      });
    }
  }
}
module.exports = RoomController
