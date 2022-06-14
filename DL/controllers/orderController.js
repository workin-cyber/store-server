require('../db').connect();
const { orderModel } = require('../models/order')

async function create(data) {
    return await orderModel.create(data);
}
async function read(filter, proj) {
    return await orderModel.find(filter, proj)
    .populate('userId')
    .populate('items.itemId');
}
async function update(filter, newData) {
    return await orderModel.updateOne(filter, newData);
}

module.exports = { create, read, update }