'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')
const Config = use('Config')

class User extends Model {
  static boot () {
    super.boot()
    this.addTrait('Hashpassword')
  }
  getStatus (status) {
    let x=Config.get("local.status1.1");
    return x;
  }
  guest() {
    return this.hasOne('App/Models/Guest')
  }

  /**
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
