'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

// validation
const { validate } = use('Validator')
const rule = use('App/Validators/demo')
//model
const User = use('App/Models/User')

//database
const Database = use('Database')

const Config = use('Config')

const Event = use('Event')

/**
 * Resourceful controller for interacting with users
 */

class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async signup({ request, response, view, auth }) {

    const trx = await Database.beginTransaction()

    const { username, password, email } = request.post();

    // const rules = {
    //   email: 'required|email|unique:users,email',
    //   username: 'required',
    //   password: 'required|min:5',
    // }

    const validation = await validate(request.all(), rule.rules)

    const user = await User.create({
      email: email,
      username: username,
      password: password,
    });

    if (validation.fails()) {
      return validation.messages()
    }

    const tokan = await auth.generate(user);

    return response.json({
      message: "successfull signin",
      data: user,
      token: tokan
    });
  }
  
  async signin({ request, response, view, auth }) {
    try {
      const token = await auth.attempt(
        request.input('email'),
        request.input('password')
      )
      Event.fire('new::sanket', token)
      return response.json({
        status: 'success signin',
        data: token,
      })
    }
    catch (error) {
      throw error
    }
  }

}
module.exports = UserController
