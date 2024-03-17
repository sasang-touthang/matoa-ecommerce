"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
// Import controllers
const { createNewUser, getNumberOfUsers, updateUserInformation, userLogin, } = require("../controller/usersController");
// Create new user
router.post("/signup", createNewUser);
// Login a user
router.post("/login", userLogin);
// Get number of users
router.get("/count", getNumberOfUsers);
// Update useer information
router.put("/:id", updateUserInformation);
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3JvdXRlci91c2VyUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxxQkFBcUI7QUFDckIsTUFBTSxFQUNKLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIscUJBQXFCLEVBQ3JCLFNBQVMsR0FDVixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBRTdDLGtCQUFrQjtBQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUV0QyxlQUFlO0FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFFakMsc0JBQXNCO0FBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFdkMsMkJBQTJCO0FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHFCQUFxQixDQUFDLENBQUM7QUFFMUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMifQ==