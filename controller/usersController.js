"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../model/user");
const Cart = require("../model/cart");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Create new user
function createNewUser(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      // Create new cart for new user
      const newCart = new Cart({
        items: [],
        totalAmount: 0,
      });
      // Create new user
      const newUser = new User(
        Object.assign(Object.assign({}, req.body), {
          password: bcrypt.hashSync(req.body.password, 10),
          cart: newCart._id,
        })
      );
      // Reference new user
      newCart.user = newUser._id;
      yield newCart.save();
      yield newUser.save();
      res
        .status(201)
        .send({ message: "User created successfully.", user: newUser });
    } catch (err) {
      res.status(500).send({ message: "Error creating user", err: err });
    }
  });
}
// Login a user
function userLogin(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const user = yield User.findOne({ email: req.body.email });
      const checkPassword = yield bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!user) {
        return res.status(400).json({ message: "User not found!" });
      }
      if (!checkPassword) {
        return res.status(401).json({ message: "Password incorrect." });
      }
      const secret = process.env.JWT_SECRET;
      // Generate token if user exists and password is correct
      const token = jwt.sign(
        { userId: user._id, isAdmin: user.isAdmin },
        secret,
        {
          expiresIn: 0,
        }
      );
      res
        .status(200)
        .json({ username: user.username, userId: user._id, token: token });
    } catch (err) {
      res
        .status(500)
        .json({
          message: "User does not exist. Please enter a correct email.",
        });
    }
  });
}
// Get number of users
function getNumberOfUsers(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const count = yield User.countDocuments();
      res.status(200).json({
        message: `You have ${count} ${count > 1 ? "users" : "user"} currently.`,
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error fetching number of users.", err: err });
    }
  });
}
// Update user information
function updateUserInformation(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const { id } = req.params;
      const updatedUser = yield User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res
        .status(200)
        .json({ message: "User information updated.", user: updatedUser });
    } catch (err) {
      res.status(500).json({ message: "Error updating user information." });
    }
  });
}
module.exports = {
  createNewUser,
  getNumberOfUsers,
  updateUserInformation,
  userLogin,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnNDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlci91c2Vyc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDdEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFHcEMsa0JBQWtCO0FBQ2xCLFNBQWUsYUFBYSxDQUFDLEdBQVksRUFBRSxHQUFhOztRQUN0RCxJQUFJLENBQUM7WUFDSCwrQkFBK0I7WUFDL0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUM7Z0JBQ3ZCLEtBQUssRUFBRSxFQUFFO2dCQUNULFdBQVcsRUFBRSxDQUFDO2FBQ2YsQ0FBQyxDQUFDO1lBRUgsa0JBQWtCO1lBQ2xCLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxpQ0FDbkIsR0FBRyxDQUFDLElBQUksS0FDWCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFDaEQsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQ2pCLENBQUM7WUFFSCxxQkFBcUI7WUFDckIsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzNCLE1BQU0sT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JCLE1BQU0sT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXJCLEdBQUc7aUJBQ0EsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDWCxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLE9B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
