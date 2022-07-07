const express = require('express'),
    router = express.Router(),
    itemLogic = require('../BL/itemLogic'),
    { authJWT } = require('../middleware/auth')

router.get('/', async (req, res) => {
    try {
        // check permission / token
        const result = await itemLogic.getAllItems()
        res.send(result)
    }
    catch (err) {
        res.send(err)
    }
})

const x = async (req, res, next) => {
    console.log("bla bla");
    next()
}

router.get('/items',x , async (req, res) => {

})


module.exports = router;