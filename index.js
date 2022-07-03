require("dotenv").config()

const
  express = require("express"),
  app = express(),
  PORT = process.env.PORT || 3001

app.use(require("cors")())
app.use(express.json())

const mainRouter = require("./Routes")
app.use("/api", mainRouter)

app.listen(PORT, () => console.log(`server runing on port ${PORT}`))
require("./DL/db").connect();

//GET - www.loc.com

// GET www.loc.com/api/users
// POST www.loc.com/api/users
// body {name: moshe, passwd: 123 ....}

// PUT www.loc.com/api/users/1
// body {_id: 123, name: david, passwd: 234 .....}

// DELETE www.loc.com/users/1
