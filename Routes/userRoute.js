const express = require("express");
const router = express.Router();
const userLogic = require("../BL/userLogic");
const { read } = require("../DL/controllers/userController");


router.post("/register/:theking", async (req, res) => {
  console.log("req body", req.body);
  console.log("req params", req.params)
  console.log("req query", req.query)
  try {
    const result = await userLogic.register(req.body)
    res.status(200).send("success")
  } catch (error) {
    if (error.code && error.code < 1000) {
      res.status(error.code).send(error.message)
    } else {
      res.send("something went wrong")
    }
  }
})


// router.get("/", async (req, res) => {
//   const users = await userLogic.getAllUsers();
//   res.send(users);
// });




// router.get("/:id", async (req, res) => {
//   console.log("id")
//   const user = await userLogic.getUserDetailsById(req.params.id)
//   res.send(user);
// });


// router.post("/", async (req, res) => {
//   const { firstName, lastName, email } = req.body;
//   const restFields = {
//     password: "987865",
//     address: {
//       street: 12,
//       homeNum: 34,
//       city: "jerusalem",
//     },
//     gender: "male",
//   };

//   const userFields = { firstName, lastName, email, ...restFields };
//   const user = await userLogic.createUser(userFields);
//   res.send(user);
// });

// router.put("/edit_user/:id", async (req, res) => {
//   const sevedUser = await userLogic.updateUser(req.params.id, req.body)
//   res.send(sevedUser)
// })

// router.delete("/:id", async (req, res) => {
//   const sevedUser = await userLogic.del(req.params.id)
//   res.send(sevedUser)
// })



module.exports = router;
