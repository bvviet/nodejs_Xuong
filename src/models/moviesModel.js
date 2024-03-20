import mongoose from "mongoose";
const Schema = mongoose.Schema;

const moviesSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        poster: {
            type: String,
        },
        director: {
            type: String,
        },
        cast: {
            type: String,
        },
        // genres: ["65f7ec13b7b6e142083266b9", "65f7ec13b7b6e142083266b9"],
        genres: {
            type: [Schema.Types.ObjectId],
            ref: "genres",
            require: true,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "categories",
            require: true,
        },
        runingTime: {
            type: Number,
        },
        language: {
            type: String,
        },
        rated: {
            type: Number,
        },
        trailer: {
            type: String,
        },
        imgBanner: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("movies", moviesSchema);
