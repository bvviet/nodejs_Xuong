import genresModel from "../models/genresModel.js";
class GenresController {
    // Get all Genres
    async getAllGenres(req, res) {
        try {
            const Genres = await genresModel.find();
            res.status(200).json({
                message: "Genres fetched successfully",
                data: Genres,
            });
        } catch (error) {
            res.status(400).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
    // Get all Genres
    async getDetailGenres(req, res) {
        try {
            const Genres = await genresModel.findById(req.params.id);
            if (!Genres) {
                return res.status(404).json({
                    message: "Genres not found",
                });
            }
            res.status(200).json({
                message: "Genres fetched successfully fetched",
                data: Genres,
            });
        } catch (error) {
            res.status(400).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
    // Get all Genres
    async createGenres(req, res) {
        try {
            const genres = await genresModel.create(req.body);
            res.status(200).json({
                message: "Genres created successfully",
                data: genres,
            });
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
    // Get all Genres
    async updateGenres(req, res) {
        try {
            const Genres = await genresModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!Genres) {
                return res.status(404).json({
                    message: "Genres not found",
                });
            }
            res.status(200).json({
                message: "Genres updated successfully",
                data: Genres,
            });
        } catch (error) {
            res.status(400).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
    // Get all Genres
    async deleteGenres(req, res) {
        try {
            const Genres = await genresModel.findByIdAndDelete(req.params.id);
            if (!Genres) {
                return res.status(404).json({
                    message: "Genres not found",
                });
            }
            res.status(200).json({
                message: "Genres deleted successfully",
                data: Genres,
            });
        } catch (error) {
            res.status(400).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
}

export default new GenresController();
