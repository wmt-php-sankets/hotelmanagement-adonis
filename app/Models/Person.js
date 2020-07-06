'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

  class Person extends Model {
      
      
    bussiness () {
          return this.belongsTo('App/Models/Bussiness','bussiness_id','id')
        }
        
        loans () {
          return this.hasMany('App/Models/Loan','id','people_id')
        }

  }

module.exports = Person
