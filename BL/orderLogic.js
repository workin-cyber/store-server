const userController = require('../DL/controllers/userController')
const orderController = require('../DL/controllers/orderController')
const itemController = require('../DL/controllers/itemController')

async function createOrder(order) {
    let res = {}

    // לבדוק האם היוזר קיים
    // const user = await userController.read({email:order.user})[0]
    const user = await userController.readOne({ email: order.user })
    if (!user) { console.log('Error- user not found'); return false; }
    let total = 0;
    // לעבור על כל מוצר והאם מוצר קיים וגם יש לו מלאי 
    for (i of order.cart) {
        const item = await itemController.readOne({ barcode: i.item })
        // אם המוצר קיים וגם המלאי גדול מהכמות הנדרשת - תמשיך 
        // אם לא שגיאה
        if (!item || item.inStock < i.qty) {
            console.log("not found or not in stock"); return false
        }
        total += item.price * i.qty;
    }

        // שמירת הזמנה


        // לעדכן מלאי במידה ונשמר





        console.log(res);
    return res
}

async function getOrdersByUser(){

}
async function getOrderById(){
    
}


const orderFromClient = {
    user: "avicohen1212@hotmail.com",
    cart: [{
        item: "9KJ7F5",
        qty: 6
    }],
}

createOrder(orderFromClient);
