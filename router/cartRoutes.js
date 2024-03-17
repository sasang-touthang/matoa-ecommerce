"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const isAuth = require("../authentication/isAuthen");
// Import controllers
const { getUserCart, addToCart, updateUserCart, deleteUserCart, } = require("../controller/cartController");
// Add to Cart
router.post("/add", isAuth, addToCart);
//  Get cart
router.get("/", isAuth, getUserCart);
// Update cart
router.put("/:id", updateUserCart);
// Delete cart
router.delete("/remove", isAuth, deleteUserCart);
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydFJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3JvdXRlci9jYXJ0Um91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUNyRCxxQkFBcUI7QUFDckIsTUFBTSxFQUNKLFdBQVcsRUFDWCxTQUFTLEVBQ1QsY0FBYyxFQUNkLGNBQWMsR0FDZixHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRTVDLGNBQWM7QUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFFdkMsWUFBWTtBQUNaLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztBQUVyQyxjQUFjO0FBQ2QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFFbkMsY0FBYztBQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztBQUVqRCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyJ9