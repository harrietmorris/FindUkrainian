import { connect } from 'mongoose';
import { dbName, connectionString } from '../config';


export async function connectDB() {
  try {
    await connect(`${connectionString}/${dbName}`);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(`Error connecting to MongoDB', ${error}`);
  }
}

export default { connectDB }; 
