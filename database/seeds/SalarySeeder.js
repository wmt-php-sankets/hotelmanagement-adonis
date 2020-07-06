'use strict'

/*
|--------------------------------------------------------------------------
| SalarySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Salary = use('App/Models/Salary')

class SalarySeeder {
  async run () {
    const salaryArray = await
    Salary
      .createMany([{
        amount: "5000",
        catagory: "C",
        experance: "0 to 1"
      },{
        amount: "10000",
        catagory: "B",
        experance: "1 to 3"
      },{
        amount: "15000",
        catagory: "A",
        experance: "3 to above"

      }])
  }
}

module.exports = SalarySeeder
