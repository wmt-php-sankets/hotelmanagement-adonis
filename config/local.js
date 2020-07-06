'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {
    role:{
        1:'admin',
        2:'worker',
        3:'guest'
    },
    status:{
        'active':1,
        'close':0
    },
    status1:{
        1:'active',
        0:'close'
    },
    room:{
        1:'avalable',
        0:'room are booked'
    }
}
