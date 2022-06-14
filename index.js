const express = require('express'),
    app = express(),
    PORT = 3001;


app.use(express.json()) 
app.use(require('cors')())

app.listen(PORT, () => console.log(`server is running => ${PORT}`))
require('./DL/db').connect();

