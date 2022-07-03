const jwt = require("jsonwebtoken");
const { validateToken } = require("./jwt");
const authJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // console.log("🚀 ~ file: auth.js ~ line 3 ~ authJWT ~ authHeader", authHeader)
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        // console.log("🚀 ~ file: auth.js ~ line 6 ~ authJWT ~  token", token)
        // const valid = validateToken(token)
        console.log("🚀 ~ file: auth.js ~ line 10 ~ authJWT ~ valid", valid)
        jwt.verify(token, process.env.SECRET_JWT, (err, verifyToken) => {
            if (err) {
                return res.sendStatus(403);
            }
            req._id = verifyToken._id;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
module.exports = { authJWT }


// fetch("http://localhost:3001/api/users/", {
//     method: "GET",
//     headers: { Authorization: `bearer ${localStorage.storeAccesstoken}` },
//     body: {}

// })