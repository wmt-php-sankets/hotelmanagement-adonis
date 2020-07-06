const Event = use('Event')
const Mail = use('Mail')
// const paymet = use('App/Listeners/payment')
const paymet = use('App/Listeners/Payment')
const Listener = exports = module.exports = {}
Event.once('new::sanket', async (user) => {
  try {
    console.log('i am sanket');
    await Mail.send('guest/roomdetails', user, (message) => {
      message.to('sankets@gmail.com')
      message.from('sankets@gmail.com')
    })
  } catch (error) {
    console.log(error)
    throw error
  }
})

Event.on('new::nayan', async (user) => {
  console.log('i am nayan');
  await Mail.send('guest/roomdetails', user, (message) => {
    message.to('sankets@gmail.com')
    message.from('sankets@gmail.com')
  })
})