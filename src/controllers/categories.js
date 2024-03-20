import categoriesModel from "../models/categoriesModel.js";
class CategoriesController {
    // Get all categories
    async getAllCategories(req, res) {
        try {
            const categories = await categoriesModel.find();
            res.status(200).json({
                message: "Categories fetched successfully",
                data: categories,
            });
        } catch (error) {
            res.status(400).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
    // Get all categories
    async getDetailCategories(req, res) {
        try {
            const categories = await categoriesModel.findById(req.params.id);
            if (!categories) {
                return res.status(404).json({
                    message: "Categories not found",
                });
            }
            res.status(200).json({
                message: "Categories fetched successfully",
                data: categories,
            });
        } catch (error) {
            res.status(400).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
    // Get all categories
    async createCategories(req, res) {
        try {
            const categories = await categoriesModel.create(req.body);
            res.status(200).json({
                message: "Categories created successfully",
                data: categories,
            });
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
    // Get all categories
    async updateCategories(req, res) {
        try {
            const categories = await categoriesModel.findByIdAndUpdate(req.params.id, req.body, { mew: true });
            if (!categories) {
                return res.status(404).json({
                    message: "Categories not found",
                });
            }
            res.status(200).json({
                message: "Categories updated successfully",
                data: categories,
            });
        } catch (error) {
            res.status(400).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
    // Get all categories
    async deleteCategories(req, res) {
        try {
            const categories = await categoriesModel.findByIdAndDelete(req.params.id);
            if (!categories) {
                return res.status(404).json({
                    message: "Categories not found",
                });
            }
            res.status(200).json({
                message: "Categories deleted successfully",
                data: categories,
            });
        } catch (error) {
            res.status(400).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
}

export default new CategoriesController();
