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