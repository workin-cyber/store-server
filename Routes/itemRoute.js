const express = require('express'),
    router = express.Router(),
    itemLogic = require('../BL/itemLogic'),
    { authJWT } = require('../middleware/auth')

router.get('/', authJWT , async (req, res) => {
    try {
        const result = await itemLogic.getAllItems()
        res.send(result)
    }
    catch (err) {
        res.send(err)
    }
})

module.exports = router;