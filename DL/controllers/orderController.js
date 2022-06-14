require('../db').connect();

const { orderModel } = require('../models/order')


async function create(data) {
    const res = await orderModel.create(data);
    console.log(res);
}
async function read(filter, proj) {
    const res = await orderModel.find(filter, proj)
    .populate('userId')
    .populate('items.itemId');
    console.log(res[0].items);
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

const order = {
    totalPrice: 100,
    userId: "629f31f72b63a0a2693f86d7",
    items: [{
        itemId: "62a83c0f126ef05e4abc3396",
        qty: 6
    }],
}

// create(order)

read({
    _id : '62a83dd1f13fb8afeaff3162'
})