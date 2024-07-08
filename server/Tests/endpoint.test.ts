import mongoose from "mongoose";
import request from "supertest";
import app from "../index";
import seedData from "../SeedData/seedBusinesses";
import { connectDB } from "../models";

describe("get all businesses", () => {
  afterEach(async () => {
    await mongoose.connection.close();
  });

  it("should get all businesses", async () => {
    const res = await request(app).get("/businesses").send();
    expect(res.status).toEqual(200);
    expect(res.body.length).toBe(seedData.length);
  });
});

describe("get business by ID", () => {
  afterEach(async () => {
    await mongoose.connection.close();
  });

  it("should get a business from the ID", async () => {
    await connectDB();
    const allBusinesses = await request(app).get("/businesses").send();
    const business = allBusinesses.body[0];
    const businessId = business._id;

    const res = await request(app).get(`/businesses/${businessId}`).send();
    expect(res.statusCode).toEqual(200);
    expect(res.body._id).toEqual(`${businessId}`);
  });
});
