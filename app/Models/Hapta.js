'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Hapta extends Model {
    loan () {
        return this.belongsTo('App/Models/Loan','loan_id','id')
      }
}

module.exports = Hapta
