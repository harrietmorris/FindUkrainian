// seed.js


import { connectionString, dbName } from '../config';
import mongoose from 'mongoose';
import Business from '../models/business';
import Categories from '../models/category';
import {seedData} from './seedBusinesses';
import {seedCategories} from './seedCategories';


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

