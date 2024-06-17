// seed.js


import { connectionString, dbName } from '../config.ts';
import mongoose from 'mongoose';
import Business from '../models/business.ts';
import Categories from '../models/category.ts';
import {seedData} from './seedBusinesses.ts';
import {seedCategories} from './seedCategories.ts';


//FIXME: do we need to remove the console logs here -> if its only use for dev?
const seedDB = (async () => {


  try {
    // Connect to MongoDB
    await mongoose.connect(`${connectionString}/${dbName}`); 

    // Clear the database
    await Business.deleteMany({});
    console.log('Business collection cleared');
    await Categories.deleteMany({});
    console.log('Categories collection cleared');

    // Insert the seed data
    await Business.insertMany(seedData);
    console.log('Business collection seeded');
    console.log(seedData);
    await Categories.insertMany(seedCategories);
    console.log('Categories collection seeded');
    console.log(seedCategories);

    // Close the connection
    mongoose.connection.close();
    console.log('Connection closed');
  } catch (err) {
    console.error(err);
  }
})()

