'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bussiness extends Model {
    
    // static get hidden () {
    //   return ['id','status']
    // }

    static scopeHasId (query) {
      return query.doesntHave('persons')
    }
  persons() {
        return this.hasMany('App/Models/Person','id','bussiness_id')
      }

      loandata() {
        return this.manyThrough('App/Models/Person', 'loans','id','bussiness_id')
      }

      // loans () {
      //   return this.hasMany('App/Models/Loan')
      // }
}

module.exports = Bussiness
