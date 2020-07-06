'use strict'

/*
|--------------------------------------------------------------------------
| RoomSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Room = use('App/Models/Room')
class RoomSeeder {
  async run () {
    const salaryArray = await
    Room
      .createMany([{
        room_number: "100",
        day_1_price: "700",
        ratting: "3",
        capacity:"5",
        status:1
      },{
        room_number: "101",
        day_1_price: "800",
        ratting: "4",
        capacity:"4",
        status:1
      },{
        room_number: "102",
        day_1_price: "900",
        ratting: "5",
        capacity:"6",
        status:1
      },{
        room_number: "103",
        day_1_price: "700",
        ratting: "3",
        capacity:"5",
        status:1
      },{
        room_number: "104",
        day_1_price: "800",
        ratting: "4",
        capacity:"2",
        status:1
      },{
        room_number: "105",
        day_1_price: "900",
        ratting: "5",
        capacity:"3",
        status:1
      },{
        room_number: "106",
        day_1_price: "700",
        ratting: "3",
        capacity:"2",
        status:1
      },{
        room_number: "107",
        day_1_price: "800",
        ratting: "4",
        capacity:"5",
        status:1
      },{
        room_number: "108",
        day_1_price: "900",
        ratting: "5",
        capacity:"3",
        status:1
      },{
        room_number: "109",
        day_1_price: "700",
        ratting: "3",
        capacity:"3",
        status:1
      },{
        room_number: "110",
        day_1_price: "800",
        ratting: "4",
        capacity:"2",
        status:1
      },{
        room_number: "111",
        day_1_price: "900",
        ratting: "5",
        capacity:"2",
        status:1
      }])
  }
}


module.exports = RoomSeeder
