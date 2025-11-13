import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("DB connectd"));
    await mongoose.connect(`${process.env.MONGODB_URI}/Ecommerce`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
