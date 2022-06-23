const userController = require("../DL/controllers/userController");

async function register(data) {
  const { email, password, firstName, lastName } = data

  if (!email || !password || !firstName || !lastName)
    throw ({ code: 400, message: "missing data" })

  const existUser = await userController.readOne({ email })
  if (existUser) throw ({ code: 405, message: "duplicated email" })

  const user = await userController.create(data)
  return true
}

async function get(id) {
  const result = id ?
    await userController.readOne({ _id: id }) :
    await userController.read({})

  if (!result) throw ({ code: 404, message: "not found" })

  return result
}


module.exports = { register, get }