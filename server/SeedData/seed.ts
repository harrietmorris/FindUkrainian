import { connectionString, dbName } from "../config";
import mongoose from "mongoose";
import Business from "../models/business";
import Categories from "../models/category";
import { seedData } from "./seedBusinesses";
import { seedCategories } from "./seedCategories";

const seedDB = (async () => {
  try {
    await mongoose.connect(`${connectionString}/${dbName}`);

    await Business.deleteMany({});
    console.log("Business collection cleared");
    await Categories.deleteMany({});
    console.log("Categories collection cleared");

    await Business.insertMany(seedData);
    console.log("Business collection seeded");
    console.log(seedData);
    await Categories.insertMany(seedCategories);
    console.log("Categories collection seeded");
    console.log(seedCategories);

    mongoose.connection.close();
    console.log("Connection closed");
  } catch (err) {
    console.error(err);
  }
})();
