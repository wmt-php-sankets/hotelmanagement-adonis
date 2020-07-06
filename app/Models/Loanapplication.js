'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Loanapplication extends Model {
    loanstatusmanage () {
        return this.belongsTo('App/Models/LoanStatusManage','loan_status_manage_id','id')
      }
}

module.exports = Loanapplication
