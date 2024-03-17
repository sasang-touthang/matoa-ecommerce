"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    items: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
            quantity: {
                type: Number,
            },
        },
    ],
    totalAmount: {
        type: Number,
    },
}, {
    timestamps: true,
});
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVsL2NhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUUvQixNQUFNLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FDM0I7SUFDRSxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQzNCLEdBQUcsRUFBRSxNQUFNO0tBQ1o7SUFDRCxLQUFLLEVBQUU7UUFDTDtZQUNFLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUMzQixHQUFHLEVBQUUsU0FBUzthQUNmO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRjtLQUNGO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsSUFBSSxFQUFFLE1BQU07S0FDYjtDQUNGLEVBQ0Q7SUFDRSxVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUNGLENBQUM7QUFFRixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNoRCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyJ9