'use strict'
const Hash = use('Hash')


class Hashpassword {
  register (Model, options) {
    Model.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }
}
module.exports = Hashpassword
