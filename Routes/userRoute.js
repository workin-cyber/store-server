const express = require("express");
const router = express.Router();

// const userLogic = require("../BL/userLogic");
// const { authJWT } = require("../middleware/auth");

// function loger(req, res, next) {
//   console.log("work 1")
//   next()
//   console.log("work 2")
// }

// router.use(loger)

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









// router.post("/register", async (req, res) => {

//   try {
//     const token = await userLogic.register(req.body)
//     res.status(200).send({ token })

//   } catch (error) {
//     console.log("register", error);
//     if (error.code && error.code < 1000) {
//       res.status(error.code).send(error.message)
//     } else {
//       res.send("something went wrong")
//     }
//   }
// })

// router.post("/login", async (req, res) => {
//   try {
//     const userToken = await userLogic.login(req.body)
//     res.send(userToken)
//   } catch (e) {
//     res.status(e.code).send(e.message)
//   }
// })

// router.get("/:id?", authJWT, async (req, res) => {

//   console.log(req._id)

//   try {
//     const result = await userLogic.get(req.params.id)
//     res.status(200).send(result)
//   } catch (error) {
//     console.log("get", error);
//     if (error.code && error.code < 1000) {
//       res.status(error.code).send(error.message)
//     } else {
//       res.status(500).send("something went wrong")
//     }
//   }
// })


// router.put("/:id", authJWT, async (req, res) => {
//   try {
//     const result = await userLogic.update(req.params.id, req.body)
//     res.status(200).send(result)
//   } catch (error) {
//     console.log("get", error);
//     if (error.code && error.code < 1000) {
//       res.status(error.code).send(error.message)
//     } else {
//       res.send("something went wrong")
//     }
//   }
// })

// router.delete("/:id", authJWT, async (req, res) => {
//   try {
//     await userLogic.del(req.params.id)
//     res.status(200).send("deleted")
//   } catch (error) {
//     console.log("get", error);
//     if (error.code && error.code < 1000) {
//       res.status(error.code).send(error.message)
//     } else {
//       res.send("something went wrong")
//     }
//   }
// })


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
