'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
// validation
const { validate } = use('Validator')

//model
const User = use('App/Models/User')
const Worker = use('App/Models/Worker')
const Guest = use('App/Models/Guest')
//database
const Database = use('Database')
//config
const Config = use('Config')

/**
 * Resourceful controller for interacting with guests
 */
class GuestController {
  /**
   * Show a list of all guests.
   * GET guests
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    try {

      const worker = await User.query().where('role', 'guest').fetch();

      return response.json({
        message: "guest list",
        data: worker
      });
    } catch (error) {
      throw error
    }
  }

  /**
   * Render a form to be used for creating a new guest.
   * GET guests/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view, auth }) {
    const trx = await Database.beginTransaction()

    const { username, password, email, age, city } = request.post();

    const rules = {
      email: 'required|email|unique:users,email',
      username: 'required',
      password: 'required|min:5',
      age: 'required|max:2',
      city: "required"
    }

    const validation = await validate(request.all(), rules)

    const user = await User.create({
      email: email,
      username: username,
      password: password,
      role: Config.get("local.role.3")
    });

    if (validation.fails()) {
      return validation.messages()
    }

    const userid = await User.query().where('email', email).pluck('id')
  
    const id = userid.toString();
    const guest = await Guest.create({
      user_id: id,
      name: username,
      age: age,
      city: city
    });

    const tokan = await auth.generate(user);
    return response.json({
      message: "successfull signin",
      data: user,
      token: tokan
    });
  }

  async destroy({ params, request, response }) {
  }
}

module.exports = GuestController
