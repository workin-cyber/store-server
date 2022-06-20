const express = require("express");
const router = express.Router();
const userLogic = require("../BL/userLogic");

router.get("/", async (req, res) => {
  const users = await userLogic.getAllUsers();
  res.send(users);
});




router.get("/:id", async (req, res) => {
  console.log("id")
  const user = await userLogic.getUserDetailsById(req.params.id)
  res.send(user);
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

router.put("/edit_user/:id", async (req, res) => {
  const sevedUser = await userLogic.updateUser(req.params.id, req.body)
  res.send(sevedUser)
})

router.delete("/:id", async (req, res) => {
  const sevedUser = await userLogic.del(req.params.id)
  res.send(sevedUser)
})



module.exports = router;
