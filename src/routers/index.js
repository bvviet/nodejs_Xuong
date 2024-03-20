import categoriesRouter from "./categoriesRouter.js";
import genresRouter from "./genresRouter.js";
import moviesRouter from "./moviesRouter.js";
export default function router(app) {
    app.use("/categories", categoriesRouter);
    app.use("/genres", genresRouter);
    app.use("/movies", moviesRouter);
}
