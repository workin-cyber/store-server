const userController = require("../DL/controllers/userController");

exports.getUserDetailsById = (id) => {
  // await userController.create({ email: "Yon@walla.com" });
  return userController.read({ _id: id })
  // find
  // check if null or exist
  // return error / user {}
}

// async function register() {
//     // many many many validations

// }

let user1 = {
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
};

// create(user1)

exports.getAllUsers = () => {
  return userController.read({});
};

exports.createUser = (userFields) => {
  return userController.create(userFields);
};
exports.updateUser = (id, newField) => {
  return userController.update({ _id: id }, newField);

}
exports.del = (id) => {
  return userController.del({ _id: id });

}
