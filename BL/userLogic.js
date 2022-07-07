const userController = require("../DL/controllers/userController");
const jwtFn = require("../middleware/jwt")

async function login(loginData) {
  const password = loginData.password;
  const email = loginData.email;
  const user = await userController.readOne({ email: email }, "+password");
  console.log("🚀 ~ file: userLogic.js ~ line 8 ~ login ~ user", user)
  if (!user) throw ({ code: 401, message: "not exist" })
  if (user.password !== password) throw ({ code: 401, message: " unauthorized" })//bcrypt.compare
  const token = jwtFn.createToken(user._id)
  return token




}
async function register(data) {
  const { email, password, firstName, lastName } = data

  if (!email || !password || !firstName || !lastName)
    throw ({ code: 400, message: "missing data" })

  const existUser = await userController.readOne({ email })
  if (existUser) throw ({ code: 405, message: "duplicated email" })

  const user = await userController.create(data)
  const token = jwtFn.createToken(user._id)
  return token
}

async function get(id) {
  const result = id ?
    await userController.readOne({ _id: id }) :
    await userController.read({})

  if (!result) throw ({ code: 404, message: "not found" })

  return result
}

async function update(id, newData) {
  const updatedUser = await userController.update({ _id: id }, newData)
  return updatedUser
}

async function del(id) {
  const deletedUser = await userController.del({ _id: id })
  return deletedUser
}

async function login2(data) {
  // check if user exist (by email)
  const user = await userController.readOne({ email: data.email }, '+password')
  if (!user) throw { code: 420, msg: "User or password is incorrect" }

  // check if passwords is equals
  if (user.password !== data.password) throw { code: 450, msg: "User or password is incorrect" }

  return jwtFn.createToken(user._id)
  
  

}

module.exports = { register, get, update, del, login, login2 }