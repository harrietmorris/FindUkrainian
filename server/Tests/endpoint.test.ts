import mongoose from "mongoose";
import request from "supertest";
import seedData from "../SeedData/seedBusinesses";
import app from '../index'
import mockData from "./MockData/mockBusiness";
import mockBusinessDb from "./MockData/mockFunctions";
import { connectDB } from "../models";
import Business from "../models/business";
import { connectionString } from "../config";
import Mock from "./MockData/mockSchema";



describe('get all businesses', () => {

      afterEach(async () => {
        await mongoose.connection.close();
        console.log('connection closed')
      });

    it('should get all businesses', async () => {
        const res = await request(app)
            .get('/businesses').send();
            expect(res.status).toEqual(200);
            expect(res.body.length).toBe(mockData.length);
    })
})


describe('get business by ID', () => {

    beforeAll(async () => {
        await mockBusinessDb();
        await mongoose.connect(`${connectionString}/${Mock}`)
        // await connectDB();
    })
    afterEach(async () => {
        await mongoose.connection.close();
        console.log('connection closed')
      });


  it('should get a business from the ID', async () => {
      const res = await request(app)
          .get('/businesses/66707d7706ee78a45cc76a04').send();
          console.log('res.body', res.body)
          expect(res.statusCode).toEqual(200);
        //   expect(res.body.name).toBe(mockData[0].name);
        expect(res.body._id).toEqual('66707d7706ee78a45cc76a04')
        
  })
})