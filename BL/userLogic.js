require('../DL/db').connect();
const userController = require('../DL/controllers/userController')

async function getUserDetailsById(id) {

    await userController.create({ email: "Yon@walla.com" })

    // find
    // check if null or exist
    // return error / user {}


}

// async function register() {
//     // many many many validations

// }

let user1 = {
    firstName: "Yonatan",
    lastName: "Ramon",
    email: "Yokon@walla.com",
    password: "987865",
    address: {
        street: 12,
        homeNum: 34,
        city: "jerusalem",
    },
    gender: 'male'
}

create(user1)

exports.bla = () => { return { x: 'y' } }