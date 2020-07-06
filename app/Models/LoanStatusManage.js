// 'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class LoanStatusManage extends Model {
  loanstatus() {
    return this.belongsTo('App/Models/Loanstatus', 'loan_status_id', 'id')
  }
    
  loanapplication() {
    return this.hasMany('App/Models/Loanapplication', 'id', 'loan_status_manage_id')
  }

}

module.exports = LoanStatusManage
