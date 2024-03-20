import mongoose from "mongoose";
const Schema = mongoose.Schema;

const genresSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("genres", genresSchema);
