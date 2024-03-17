"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cart = require("../model/cart");
const Product = require("../model/product");
// Get user cart
function getUserCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // @ts-ignore
            const userId = req.userId;
            if (userId) {
                const cart = yield Cart.findOne({ user: userId }).populate("items.product");
                if (!cart) {
                    return res.status(404).json({ message: "No cart found." });
                }
                res.status(200).json({ cart: cart, message: "Cart was found!" });
            }
            else {
                res.status(404).json({ message: "Login required." });
            }
        }
        catch (err) {
            res.status(500).json({ message: "Error fetching user cart" });
        }
    });
}
// Add to cart
function addToCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { productId, quantity } = req.body;
            const product = yield Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            // Get user's cart (or create a new one if it doesn't exist)
            // @ts-ignore
            const userId = req.userId;
            let cart = yield Cart.findOne({ user: userId });
            // Check if product already exists in cart
            const existingItem = cart.items.find((item) => item.product.toString() === productId);
            // Update quantity if product already exists, otherwise add new item
            if (existingItem) {
                existingItem.quantity += quantity;
            }
            else {
                cart.items.push({ product: productId, quantity: quantity });
            }
            // Update total amount based on the product's price and quantity
            cart.totalAmount += product.price * quantity;
            // Save the updated cart
            const newCart = yield cart.save();
            res.json({ message: "Product added to cart", newCart });
        }
        catch (err) {
            res.status(500).json({ message: "Error logging in" });
        }
    });
}
// Update user cart
function updateUserCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const updatedCart = yield Cart.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res
                .status(200)
                .json({ message: "Cart updated successfully.", cart: updatedCart });
        }
        catch (err) {
            res.status(500).json({ message: "Error updating cart" });
        }
    });
}
// Delete cart
function deleteUserCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // @ts-ignore
            const userId = req.userId;
            const productId = req.body.productId;
            const quantity = req.body.quantity;
            const product = yield Product.findOne({ _id: productId });
            if (userId) {
                const cart = yield Cart.findOne({ user: userId });
                if (!cart) {
                    return res.status(404).json({ message: "No cart found." });
                }
                // Remove the item from the cart
                cart.items = cart.items.filter((item) => {
                    return item.product.toString() !== productId.toString();
                });
                if (cart.totalAmount > 0) {
                    cart.totalAmount -= product.price * quantity;
                }
                const updatedCart = yield cart.save();
                res.status(304).json({
                    message: "Product was successfully removed from the cart!",
                    cart: updateUserCart,
                });
            }
            else {
                res.status(404).json({ message: "User not found." });
            }
        }
        catch (err) {
            res.status(500).json({ message: "Error deleting cart" });
        }
    });
}
module.exports = { getUserCart, addToCart, updateUserCart, deleteUserCart };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250cm9sbGVyL2NhcnRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRzVDLGdCQUFnQjtBQUNoQixTQUFlLFdBQVcsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7UUFDcEQsSUFBSSxDQUFDO1lBQ0gsYUFBYTtZQUNiLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFFMUIsSUFBSSxNQUFNLEVBQUUsQ0FBQztnQkFDWCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQ3hELGVBQWUsQ0FDaEIsQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7Z0JBQzdELENBQUM7Z0JBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDbkUsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztZQUN2RCxDQUFDO1FBQ0gsQ0FBQztRQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDYixHQUFHLENBQUMsTUFB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