require('../db').connect();

const { itemModel } = require('../models/item')

async function create(data) {
    const res = await itemModel.create(data);
    console.log(res);
}
async function read(filter, proj) {
    const res = await itemModel.find(filter, proj);
    console.log(res);
}
async function update(filter, newData) {
    const res = await itemModel.updateOne(filter, newData);
    console.log(res);
    return res;
}
async function del(filter) {
    const res = await update(filter, { isActive: false })
    // console.log(res);
}

module.exports = { create, read, update, del }


const item1 = {
   name: 'Cisco 48 port',
    price: 125,
    barcode: "12RJ7E1",
    description: 'Cisco Switch +managment ',
    category: 'Networks',
    inStock: 5,
}

create(item1)