'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Loanstatus extends Model {
    loan_status_manages (){
        return this.hasMany('App/Models/LoanStatusManage','id','loan_status_id')
      }
}

module.exports = Loanstatus
