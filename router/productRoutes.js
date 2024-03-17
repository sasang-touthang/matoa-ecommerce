"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = void 0;
const express = require("express");
const router = express.Router();
// Import controllers
const { createNewProduct, getAllProducts, getNumberOfProducts, getSingleProduct, getFeaturedProduct, } = require("../controller/productsController");
const multer_1 = __importDefault(require("multer"));
// Configure multer for image storage
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const fileFilter = (request, file, callback) => {
    if (file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg") {
        callback(null, true);
    }
    else {
        callback(null, false);
    }
};
exports.fileFilter = fileFilter;
const uploadOptions = (0, multer_1.default)({ storage: storage, fileFilter: exports.fileFilter });
// Create new product
router.post("/", uploadOptions.fields([
    { name: "image", maxCount: 1 },
    { name: "images", maxCount: 12 },
]), createNewProduct);
//  Get all products
router.get("/", getAllProducts);
// Get featured product
router.get("/featured", getFeaturedProduct);
// Get a single product
router.get("/:id", getSingleProduct);
// Get number of products
router.get("/count", getNumberOfProducts);
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3JvdXRlci9wcm9kdWN0Um91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEMscUJBQXFCO0FBQ3JCLE1BQU0sRUFDSixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsa0JBQWtCLEdBQ25CLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFHaEQsb0RBQW9EO0FBS3BELHFDQUFxQztBQUNyQyxNQUFNLE9BQU8sR0FBRyxnQkFBTSxDQUFDLFdBQVcsQ0FBQztJQUNqQyxXQUFXLEVBQUUsVUFDWCxHQUFZLEVBQ1osSUFBeUIsRUFDekIsRUFBdUI7UUFFdkIsRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQ0QsUUFBUSxFQUFFLFVBQ1IsR0FBWSxFQUNaLElBQXlCLEVBQ3pCLEVBQW9CO1FBRXBCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVJLE1BQU0sVUFBVSxHQUFHLENBQ3hCLE9BQWdCLEVBQ2hCLElBQXlCLEVBQ3pCLFFBQTRCLEVBQ3RCLEVBQUU7SUFDUixJQUNFLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVztRQUM3QixJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVc7UUFDN0IsSUFBSSxDQUFDLFFBQVEsS0FBSyxZQUFZLEVBQzlCLENBQUM7UUFDRCxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7U0FBTSxDQUFDO1FBQ04sUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBZFcsUUFBQSxVQUFVLGNBY3JCO0FBRUYsTUFBTSxhQUFhLEdBQUcsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQVUsRUFBRSxDQUFDLENBQUM7QUFFM0UscUJBQXFCO0FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQ1QsR0FBRyxFQUNILGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDbkIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7SUFDOUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7Q0FDakMsQ0FBQyxFQUNGLGdCQUFnQixDQUNqQixDQUFDO0FBRUYsb0JBQW9CO0FBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBRWhDLHVCQUF1QjtBQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBRTVDLHVCQUF1QjtBQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXJDLHlCQUF5QjtBQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBRTFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIn0=