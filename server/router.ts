// const router = require('express').Router();
import Router from 'express'
import {getAllMiddleware, getByIdMiddleware} from './controller';
import Business from "./models/business";
import Category from "./models/category";

const router = Router()
router.get("/businesses", getAllMiddleware(Business));
router.get("/categories", getAllMiddleware(Category));
router.get("/businesses/:id", getByIdMiddleware(Business));
router.get("/categories/:id", getByIdMiddleware(Category));

export default router;