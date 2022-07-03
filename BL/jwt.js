const jwt = require("jsonwebtoken")
const secret = process.env.SECRET_JWT

function createToken(_id) {
   return jwt.sign({ _id }, secret, { expiresIn: "10m" })
}

function validateToken(token) {
   return jwt.verify(token, secret)
}

module.exports = { createToken, validateToken }