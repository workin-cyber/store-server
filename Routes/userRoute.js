
const userLogic = require('../BL/userLogic')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', async (req, res) => {

    let res = await userLogic.bla()

    res.send({
        firstName: "Yonatan",
        lastName: "Ramon",
        email: "Yokon@walla.com",
        password: "987865",
        address: {
            street: 12,
            homeNum: 34,
            city: "jerusalem",
        },
        gender: 'male'
    })
})