'use strict'
/*
|--------------------------------------------------------------------------

| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//signin signup update
Route.post('/signup','UserController.signup')
Route.post('/signin','UserController.signin')

//create worker
Route.get('/worker/index','WorkerController.index').as('worker.index').middleware(['auth']);
Route.post('/worker/store','WorkerController.store').as('worker.store').middleware(['auth']);

//guest 
Route.get('/guest/index','GuestController.index').as('guest.index').middleware(['auth']);
Route.post('/guest/create','GuestController.create').as('guest.create')

//room
Route.get('/room/index','RoomController.index').as('room.index').middleware(['auth']);
Route.post('/room/booking/:id','RoomController.booking').as('room.booking')

//payment
Route.post('/payment/payment','PaymentController.payment').as('payment.payment').middleware(['auth']);

//extra activity and precties
Route.get('/payment/payment/total','PaymentController.total').as('payment.total');
Route.get('/payment/payment/total/count','PaymentController.count').as('payment.count');
Route.get('/payment/payment/total/count1','PaymentController.count1').as('payment.count');