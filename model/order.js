"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
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
        required: true,
    },
    phone: {
        type: Number,
    },
    status: {
        type: "String",
    },
    shippingAddress: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zip: {
        type: Number,
    },
    country: {
        type: String,
    },
}, {
    timestamps: true,
});
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbC9vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBRS9CLE1BQU0sV0FBVyxHQUFHLElBQUksTUFBTSxDQUM1QjtJQUNFLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDM0IsR0FBRyxFQUFFLE1BQU07S0FDWjtJQUNELEtBQUssRUFBRTtRQUNMO1lBQ0UsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7Z0JBQzNCLEdBQUcsRUFBRSxTQUFTO2FBQ2Y7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07YUFDYjtTQUNGO0tBQ0Y7SUFDRCxXQUFXLEVBQUU7UUFDWCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7S0FDZjtJQUNELGVBQWUsRUFBRTtRQUNmLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtLQUNiO0NBQ0YsRUFDRDtJQUNFLFVBQVUsRUFBRSxJQUFJO0NBQ2pCLENBQ0YsQ0FBQztBQUVGLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIn0=