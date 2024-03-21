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
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_KEY);
const express = require("express");
const router = express.Router();
router.post("/create-checkout-session", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const session = yield stripe.checkout.sessions.create({
      shipping_address_collection: {
        allowed_countries: ["IN"],
      },
      line_items: req.body.items.map((item) => {
        let image = `${process.env.IMAGE_URL}${item.product.image}`;
        console.log(image);
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.product.name,
              images: [image],
              metadata: {
                id: item.product_id,
              },
            },
            unit_amount: item.product.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}success`,
      cancel_url: `${process.env.CLIENT_URL}fail`,
    });
    res.json({ url: session.url });
  })
);
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVyL3N0cmlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG9DQUFvQztBQUNwQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN6RCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFbkMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDNUUsTUFBTSxPQUFPLEdBQUcsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDcEQsMkJBQTJCLEVBQUU7WUFDM0IsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUM7U0FDMUI7UUFDRCxVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxLQUFLLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTztnQkFDTCxVQUFVLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsWUFBWSxFQUFFO3dCQUNaLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7d0JBQ3ZCLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDZixRQUFRLEVBQUU7NEJBQ1IsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVO3lCQUNwQjtxQkFDRjtvQkFDRCxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRztpQkFDdEM7Z0JBQ0QsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCLENBQUM7UUFDSixDQUFDLENBQUM7UUFDRixJQUFJLEVBQUUsU0FBUztRQUNmLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxTQUFTO1FBQy9DLFVBQVUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxNQUFNO0tBQzVDLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIn0=
