
const { itemModel } = require('../models/item')

async function create(data) {
    return await itemModel.create(data);
}
async function read(filter={}, proj) {
    return await itemModel.find(filter, proj);
}

async function readOne(filter, proj) {
    return await itemModel.findOne(filter, proj);
}

async function update(filter, newData) {
    return await itemModel.updateOne(filter, newData);
}
async function del(filter) {
    return await update(filter, { isActive: false })
}

module.exports = { create, read,readOne, update, del }