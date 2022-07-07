const express = require('express'),
    router = express.Router();
const { authJWT } = require('../middleware/auth')
const userLogic = require('../BL/userLogic');

router.post('/login', async (req, res) => {
    try {
        const result = await userLogic.login2(req.body)
        // console.log(result);
        res.send(result)
    }
    catch (err) {
        res.status(err.code).json(err.msg)
    }
})

router.get('/test',authJWT,async(req,res)=>{
    
    res.send(["banana","apple","kiwi"])
})

module.exports = router