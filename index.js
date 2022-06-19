const express = require("express"),
  app = express(),
  PORT = 3001;

const router = require("./Routes");

app.use(express.json());
app.use(require("cors")());


app.use("/api", router);

app.listen(PORT, () => console.log(`server is running => ${PORT}`));
require("./DL/db").connect();

//GET - www.loc.com

// GET www.loc.com/api/users
// POST www.loc.com/api/users
// body {name: moshe, passwd: 123 ....}

// PUT www.loc.com/api/users/1
// body {_id: 123, name: david, passwd: 234 .....}

// DELETE www.loc.com/users/1
