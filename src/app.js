// server.mjs
import express from "express";
import router from "./routers/index.js";
import "dotenv/config";
import connect from "./config/connect.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

router(app);
connect();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
