'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User')
const Config = use('Config')

class UserSeeder {
  async run() {

    const usersArray = await
      User
        .createMany([{
          username: "sanket",
          email: "sanket"+"@gmail.com",
          password: "123456",
          role: Config.get("local.role.1")
        },{
          username: "akshay",
          email: "akshay"+"@gmail.com",
          password: "123456",
          role:Config.get("local.role.1")
        },{
          username: "kartik",
          email: "kartik" + "@gmail.com",
          password: "123456",
          role:Config.get("local.role.1")
        },{
          username: "nayan",
          email: "nayan"+"@gmail.com",
          password: "123456",
          role:Config.get("local.role.1")
        }])
  }
}

module.exports = UserSeeder
