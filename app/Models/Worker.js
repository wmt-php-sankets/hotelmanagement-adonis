'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Config = use('Config')
class Worker extends Model {
    getStatus (status) {
        return Config.get("local.status1.1");;
      }

}

module.exports = Worker
