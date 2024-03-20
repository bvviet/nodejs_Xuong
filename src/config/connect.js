import mongoose from "mongoose";
const connect = () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Ket noi thanh cong"));
};
export default connect;
