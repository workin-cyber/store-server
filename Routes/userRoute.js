const express = require("express");
const router = express.Router();
const userLogic = require("../BL/userLogic");

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.get("/user", async (req, res) => {
    let reult = await userLogic.bla();

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
        gender: "male",
    });
});

module.exports = router;
