const itemController = require('../DL/controllers/itemController')

async function getAllItems(){
    return await itemController.read()
}

module.exports = {getAllItems}