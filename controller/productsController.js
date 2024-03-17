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
const Product = require("../model/product");
// Create new product
function createNewProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // @ts-ignore
            const images = req.files.images;
            // @ts-ignore;
            const image = req.files.image[0];
            const newProduct = new Product(Object.assign(Object.assign({}, req.body), { image: image.path, images: images &&
                    images.map((image) => {
                        return image.path;
                    }) }));
            yield newProduct.save();
            res
                .status(200)
                .json({ message: "Product successfully created.", product: newProduct });
        }
        catch (err) {
            res
                .status(500)
                // @ts-ignore
                .json({ message: "Error creating product.", err: err.message });
        }
    });
}
// Get all products
function getAllProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { limit } = req.query;
            const allProducts = yield Product.find({ isFeatured: false }).limit(limit);
            res
                .status(200)
                .json({ message: "Successfully fetched.", products: allProducts });
        }
        catch (err) {
            res.status(500).json({ message: "Error fetching products" });
        }
    });
}
// Get a single product
function getSingleProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const product = yield Product.findById(id);
            res
                .status(200)
                .json({ message: "Successfully fetched product.", product: product });
        }
        catch (err) {
            res.status(500).json({ message: "Error fetching product." });
        }
    });
}
// Get number of products
function getNumberOfProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const count = yield Product.countDocuments();
            res.status(200).json({
                message: `You have ${count} ${count > 1 ? "products" : "user"} currently.`,
            });
        }
        catch (err) {
            res
                .status(500)
                .json({ message: "Error fetching number of products.", err: err });
        }
    });
}
// Get Featured products
function getFeaturedProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield Product.find({ isFeatured: true });
            res
                .status(200)
                .json({ message: "Successfully fetched product.", product: product });
        }
        catch (err) {
            res
                .status(500)
                // @ts-ignore
                .json({ message: "Error fetching product.", err: err.message });
        }
    });
}
module.exports = {
    createNewProduct,
    getAllProducts,
    getNumberOfProducts,
    getSingleProduct,
    getFeaturedProduct,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHNDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlci9wcm9kdWN0c0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUc1QyxxQkFBcUI7QUFDckIsU0FBZSxnQkFBZ0IsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7UUFDekQsSUFBSSxDQUFDO1lBQ0gsYUFBYTtZQUNiLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ2hDLGNBQWM7WUFDZCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVqQyxNQUFNLFVBQVUsR0FBRyxJQUFJLE9BQU8saUNBQ3pCLEdBQUcsQ0FBQyxJQUFJLEtBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQ2pCLE1BQU0sRUFDSixNQUFNO29CQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTt3QkFDeEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNwQixDQUFDLENBQUMsSUFDSixDQUFDO1lBQ0gsTUFBTSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsR0FBRztpQkFDQSxNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNYLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUM3RSxDQUFDO1FBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNiLEdBQUc7aUJBQ0EsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDWixhQUFhO2lCQUNaLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLE9B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