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
const Order = require("../model/order");
// Create new order
function createNewOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newOrder = new Order(req.body);
            yield newOrder.save();
            res
                .status(200)
                .json({ message: "Order successfully placed.", product: newOrder });
        }
        catch (err) {
            res.status(500).json({ message: "Error ordering.", err: err });
        }
    });
}
// Get number of orders
function getNumberOfOrders(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const count = yield Order.countDocuments();
            res.status(200).json({
                message: `You have ${count} ${count > 1 ? "products" : "user"} currently.`,
            });
        }
        catch (err) {
            res
                .status(500)
                .json({ message: "Error fetching number of orders.", err: err });
        }
    });
}
module.exports = { createNewOrder, getNumberOfOrders };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlci9vcmRlckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUd4QyxtQkFBbUI7QUFDbkIsU0FBZSxjQUFjLENBQUMsR0FBWSxFQUFFLEdBQWE7O1FBQ3ZELElBQUksQ0FBQztZQUNILE1BQU0sUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QixHQUFHO2lCQUNBLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ1gsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7UUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDakUsQ0FBQztJQUNILENBQUM7Q0FBQTtBQUVELHVCQUF1QjtBQUN2QixTQUFlLGlCQUFpQixDQUFDLEdBQVksRUFBRSxHQUFhOztRQUMxRCxJQUFJLENBQUM7WUFDSCxNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbkIsT0FBTyxFQUFFLFlBQVksS0FBSyxJQUN4QixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQzNCLGFBQWE7YUFDZCxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNiLEdBQUc7aUJBQ0EsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDWCxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckUsQ0FBQztJQUNILENBQUM7Q0FBQTtBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyJ9