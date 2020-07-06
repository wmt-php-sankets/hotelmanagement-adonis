'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

// validation
const { validate } = use('Validator')

//model
const User = use('App/Models/User')
const Worker = use('App/Models/Worker')
//database
const Database = use('Database')
//config
const Config = use('Config')

/**
 * Resourceful controller for interacting with workers
 */
class WorkerController {
  /**
   * Show a list of all workers.
   * GET workers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async index({ request, response, view }) {
    try {

      const worker = await User.query().where('role', 'worker').fetch();
     

      return response.json({
        message: "worker list",
        data: worker
      });

    } catch (error) {
      throw error
    }
  }
  async store({ request, response, auth }) {
    try {
      const trx = await Database.beginTransaction()
      const adminuser = await auth.getUser();

      if (adminuser.role == 'admin') {
        const { username, password, email, age, salary_id } = request.post();
        const rules = {
          email: 'required|email|unique:users,email',
          username: 'required',
          password: 'required|min:5'
        }

        const validation = await validate(request.all(), rules)

        const user = await User.create({
          email: email,
          username: username,
          password: password,
          role: Config.get("local.role.2")
        });

        if (validation.fails()) {
          return validation.messages()
        }

        const tokan = await auth.generate(user)

        const workerAdd = await Worker.create({
          name: username,
          age: age,
          salary_id: salary_id,
          status: Config.get("local.status.active")
        });

        return response.json({
          message: "worker data created",
          data: user,
          token: tokan
        });
      }
      return response.json({
        message: "you are not admin",
        data: workerAdd,
        token: tokan
      });
    } catch (error) {
      throw error
    }

  }

  async show({ params, request, response, view }) {
  }

  async edit({ params, request, response, view }) {
  }

  async update({ params, request, response }) {
  }

  /**
   * Delete a worker with id.
   * DELETE workers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = WorkerController
