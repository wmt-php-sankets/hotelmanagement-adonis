'use strict'
const { validate } = use('Validator')
//model
const User = use('App/Models/User')
const Worker = use('App/Models/Worker')
const Payment = use('App/Models/Payment')
const Guest = use('App/Models/Guest')
const Room = use('App/Models/Room')
// const RoomGuest = use('App/Models/RoomGuest')

//database
const Database = use('Database')
//config
const Config = use('Config')
const Person = use('App/Models/Person')
const Bussiness = use('App/Models/Bussiness')
const Loan = use('App/Models/Loan')
const Hapta = use('App/Models/Hapta')
const LoanPerson = use('App/Models/LoanPerson')
const LoanStatusManage = use('App/Models/LoanStatusManage')
const Loanstatus = use('App/Models/Loanstatus')
const LoanApplication = use('App/Models/Loanapplication')

class PaymentController {

    async count1({ params, request, response, view, auth }) {
        const y = await LoanApplication.query().whereHas('loanstatusmanage', (builder) => {
            builder.where('currentstage', 'loanapppication');
            builder.whereHas('loanstatus', (builder) => {
                builder.where('id', 2)
            })
        }).getCount();
        return y
    }
    async count({ params, request, response, view, auth }) {
        const y = await LoanApplication.query().withCount('loanstatusmanage', (builder) => {
            builder.where('loan_status_id', 2).where('currentstage', 'loanapppication')
        }).fetch()
        var z = await y.toJSON()
        var n = []
        var a = z.map(i => (
            n.push(i.__meta__.loanstatusmanage_count)
        ))
        var a = n.filter((element) => element == 1)
        return a.length
    }
    async total({ params, request, response, view, auth }) {
        const bussinesssum1 = await Person.query().whereHas('bussiness', (builder) => {
            builder.where('bussiness_id', 2)
        }).fetch()

        var x = await bussinesssum1.toJSON()
        var person_id = [];
        var store = await x.map(i => (
            person_id.push(i.id)
        ));

        const bussinesssum = await Hapta.query().whereHas('loan', (builder) => {
            builder.whereIn('people_id', person_id).where('status', 1);
        }).where('status', 1).getSum('price')

        return bussinesssum

        // const posts = await Person
        // .query()
        // .whereHas('bussiness', (builder) => {
        //     builder.where('id','>','2')
        //   })
        // .fetch()
        // const bussiness_id = await Bussiness.find(1);
        // const bussiness_person = await Person.query().whereHas('bussiness', (builder) => {
        //     builder.where('id', bussiness_id.id)
        // }).fetch()
        // //   return bussiness_person
        // const bussiness_person_id = bussiness_person.toJSON()
        // let id = [];
        // bussiness_person_id.map(i => (
        //     id.push(i.id)
        // ));

        // const bussiness_person_loan = await Loan.query().whereIn('people_id', id).with('haptas').fetch()
        // const bussiness_person_loan_id = await bussiness_person_loan.toJSON()

        // const person_sum_hapta = await Loan.query().where('people_id', 1).with('haptas', (builder) => {
        //     builder.where('status', 1)
        //         .select(Database.raw('sum(price) as sum'))
        //         .select('id', 'loan_id')
        // }).fetch()
        // let id1 = [];
        // bussiness_person_loan_id.map(i => (
        //     id1.push(i.id)
        // ));
        // return person_sum_hapta
        // // return id1   

        // const bussiness_person_loan_totalsum = await Hapta.query().where('loan_id', x).getSum('price')



        //     return'sdf'
        // const usercheck = await Bussiness.query().with('persons').whereExists(function(){
        //     this.from('loans').where('id', '2')
        // }).fetch()
        // const data = await Bussiness.ids()


        // const u1 = await Bussiness.query().select('id').whereNot('id','2').fetch()
        // const users =u1.toJSON()
        // // return users
        // const person =await Person.query().whereIn('id', users).fetch()
        // return person
        // return usercheck
        // let x = data.toJSON()
        // let y = []
        // x.map(i => {
        //     y.push(
        //         i.id,   
        //     )
        // })
        // const data1 = await Bussiness.query().setVisible(['name']).fetch()
        // return data1    

        // const usercheck = await Bussiness.query().innerJoin('people', 'bussiness_id', '1').fetch()
        // const jsonform = usercheck.toJSON()


        // var x = await Database
        //     .table('bussinesses')
        //     .fullOuterJoin('people', 'bussinesses.id', 'people.id')
        // return x

        // console.log('helo');
        // debugger;

        // const usercheck1 = await  Bussiness.query().distinct('name','id','status').groupBy('status').
        // fetch()

        // return usercheck1


        const user = await Bussiness.query().fetch()

        // const s = user.toJSON()
        // var x = [];

        // ss.map(i => {
        //     x.push(i.id)
        // })
        // var y = await Person.query().whereIn('bussiness_id', x).fetch()
        // return y
    }

    async payment({ params, request, response, view, auth }) {
        try {
            const user = await auth.getUser();
            const usercheck = await Guest.query().where('user_id', user.id).with('rooms').first();

            const hotel = await Guest.query().where('user_id', user.id).first()
            const relatedHotels = await hotel.rooms().first()

            const jsondata = relatedHotels.toJSON()

            const day_1_price = jsondata.day_1_price;
            if (!usercheck == '') {
                const addpayment = await Payment.create({
                    user_id: user.id,
                    amounts: day_1_price
                })
                const roomadded = await Room.query().where('id', relatedHotels.id).update({
                    status: 1
                })
                await usercheck.rooms().detach(relatedHotels.id)
                return response.json({
                    message: "payment successfully added"
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = PaymentController
