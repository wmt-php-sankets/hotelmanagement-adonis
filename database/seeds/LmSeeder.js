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
const Person = use('App/Models/Person')
const Bussiness = use('App/Models/Bussiness')
const Loan = use('App/Models/Loan')
const Hapta = use('App/Models/Hapta')
class RoomSeeder {
  async run() {
  
  
    const bussiness1 = await
      Bussiness
        .createMany([{
          name: 'bussiness-1',
          status: 1
        }])
        const bussiness3 = await
        Person
          .createMany([{
            name: 'sanket',
            bussiness_id:'1',
            status: 1
          },{
            name: 'akshay',
            bussiness_id:'1',
            status: 1
          },{
            name: 'hardik',
            bussiness_id:'1',
            status: 1
          },{
            name: 'nikuj',
            bussiness_id:'1',
            status: 1
          }
        ])
        const bussiness2 = await
        Loan
          .createMany([{
            name: 'loan-1',
            people_id:'1',
            status: 1
          },{
            name: 'loan-11',
            people_id:'1',
            status: 1
          }
        ])

  }
}


module.exports = RoomSeeder
