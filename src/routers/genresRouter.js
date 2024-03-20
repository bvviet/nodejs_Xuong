import express from "express";
import GenresController from "../controllers/genres.js";
const genresRouter = express.Router();

genresRouter.get("/", GenresController.getAllGenres);
genresRouter.get("/:id", GenresController.getDetailGenres);
genresRouter.post("/", GenresController.createGenres);
genresRouter.put("/:id", GenresController.updateGenres);
genresRouter.delete("/:id", GenresController.deleteGenres);

export default genresRouter;
