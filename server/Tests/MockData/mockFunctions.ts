import mongoose from "mongoose";
import Business from "../../models/business";
import mockData from "./mockBusiness";
import { connectDB } from "../../models";
import Mock from "./mockSchema";

const mockBusinessDb = async () => {
    try {
      await connectDB();
    // await Business.deleteMany({});
      await Mock.insertMany(mockData)
      await mongoose.connection.close();
      console.log(mockData)
      
      } catch (err) {
      console.error(err);
    }
}

export default mockBusinessDb


