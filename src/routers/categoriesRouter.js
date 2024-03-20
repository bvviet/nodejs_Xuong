import express from "express";
import CategoriesController from "../controllers/categories.js";
const categoriesRouter = express.Router();

categoriesRouter.get("/", CategoriesController.getAllCategories);
categoriesRouter.get("/:id", CategoriesController.getDetailCategories);
categoriesRouter.post("/", CategoriesController.createCategories);
categoriesRouter.put("/:id", CategoriesController.updateCategories);
categoriesRouter.delete("/:id", CategoriesController.deleteCategories);

export default categoriesRouter;
