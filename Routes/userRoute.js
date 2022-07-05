const express = require("express");
const router = express.Router();

// const { authJWT } = require("../middleware/auth");

const userLogic = require('../BL/userLogic')
router.post('/login', async (req, res) => {
  try {
    const token = await userLogic.login(req.body);
    res.send(token)
  }
  catch (err) {
    res.send(err)
  }
})

module.exports = router;
