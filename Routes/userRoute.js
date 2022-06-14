const express = require("express");
const router = express.Router();
const userLogic = require("../BL/userLogic");

router.get("/", async (req, res) => {
  const users = await userLogic.getAllUsers();
  res.send(users);
});

router.post("/", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const restFields = {
    password: "987865",
    address: {
      street: 12,
      homeNum: 34,
      city: "jerusalem",
    },
    gender: "male",
  };

  const userFields = { firstName, lastName, email, ...restFields };
  const user = await userLogic.createUser(userFields);
  res.send(user);
});

module.exports = router;
