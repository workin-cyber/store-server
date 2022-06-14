const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },

    orderDate: {
        type: Date,
        default: Date.now
    },

    totalPrice: {
        type: Number,
        // required: true
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    items: [{
        itemId: { type: mongoose.SchemaTypes.ObjectId, ref: 'item' },
        qty: { type: Number, required: true }
    }],
    // token: {
    //     type: String,
    //     required: true,
    //     select: false


})


const orderModel = mongoose.model('order', orderSchema);
module.exports = { orderModel }

const order = {
    userId: "62a5f09c1926d8295c8bc935",
    items: [{ itemId: "62a5f09c1926d8295c8bc935", qty: 5 }, { itemId: "62a5f09c1926d8295c8bc935", qty: 4 }]

}
orderModel.create(order)