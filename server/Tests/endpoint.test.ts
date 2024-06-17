

import mongoose from "mongoose";
import request from "supertest";
import seedData from "../SeedData/seedBusinesses";
import app from '../index'



app.get('/businesses')

describe('get all businesses', () => {


      afterAll(async () => {
        await mongoose.connection.close();
        console.log('connection closed')
      });



    it('should get all businesses', async () => {
        const res = await request(app)
            .get('/businesses').send();
            
        expect(res.status).toEqual(200);
        expect(res.body.length).toBe(seedData.length);
      
    })
})
