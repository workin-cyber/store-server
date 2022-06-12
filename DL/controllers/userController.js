
const { userModel } = require('../models/user')

async function create(data) {
   const res = await userModel.create(data);
    console.log(res);
}
async function read(filter) {
    const res = await userModel.find(filter);
    console.log(res);
}
async function update(filter, newData) {
    const res = await userModel.updateOne(filter, newData);
    console.log(res);
    return res;
}
async function del(filter) {
    const res =await update(filter,{isActive:false})
    // console.log(res);
}

module.exports = { create, read, update, del }

let user1 = {
    firstName: "Yonatan",
    lastName: "Ramon",
    email: "Yon@walla.com",
    password: "987865",
    address: {
        street: 12,
        homeNum: 34,
        city: "jerusalem",
    },
    gender: 'male'
}

create(user1)
