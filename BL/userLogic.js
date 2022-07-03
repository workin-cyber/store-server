const userController = require("../DL/controllers/userController");
const jwtFn = require("./jwt")

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



module.exports = { register, get, update, del }