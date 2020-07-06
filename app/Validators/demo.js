'use strict'
class demo {
  get rules() {
    return {
      email: 'required|email|unique:users',
      password: 'required|min:10'
    }
  }
}
module.exports = demo