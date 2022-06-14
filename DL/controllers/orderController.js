require('../db').connect();

const { orderModel } = require('../models/order')

async function create(data) {
    const res = await orderModel.create(data);
    console.log(res);
}
async function read(filter, proj) {
    const res = await orderModel.find(filter, proj);
    console.log(res);
}
async function update(filter, newData) {
    const res = await orderModel.updateOne(filter, newData);
    console.log(res);
    return res;
}
// async function del(filter) {
//     const res = await update(filter, { isActive: false })
//     // console.log(res);
// }

module.exports = { create, read, update }


// const order = {
//     userId: SchemaTypes.ObjectId("62a5f09c1926d8295c8bc935"),
//     items: [{ itemId: SchemaTypes.ObjectId("62a5f09c1926d8295c8bc935"), qty: 5 }, { itemId: "62a5f09c1926d8295c8bc935", qty: 4 }]

// }
// orderModel.create(order)