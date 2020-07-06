'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Loan extends Model {
    person () {
        return this.belongsTo('App/Models/Person','person_id','id')
      }

      haptas () {
        return this.hasMany('App/Models/Hapta','id','loan_id')
      }

      // people () {
      //   // return this.belongsToMany('App/Models/Person').pivotTable('loan_people')
      //   return this.belongsToMany('App/Models/Person', 'people_id', 'loan_id', 'id', 'id').pivotTable('loan_people')      
      // }

}

module.exports = Loan
