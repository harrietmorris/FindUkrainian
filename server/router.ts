const router = require('express').Router();
import {getAllMiddleware, getByIdMiddleware} from './controller';
import Business from "./models/business";
import Category from "./models/category";

router.get("/businesses", getAllMiddleware(Business));
router.get("/categories", getAllMiddleware(Category));
router.get("/businesses/:id", getByIdMiddleware(Business));
router.get("/categories/:id", getByIdMiddleware(Category));

export default router;