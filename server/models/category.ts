// const mongoose = require('mongoose');
import { model, Schema } from 'mongoose';
import { ICategoryType } from '../Types/Types';


const categorySchema: Schema = new Schema<ICategoryType>({
  name: {
    en: {
      type: String,
      required: true,
    },
    uk: {
      type: String,
      required: true,
    },
  },
  description: {
    en: {
      type: String,
      required: true,
    },
    uk: {
      type: String,
      required: true,
    },
  },
});

const Category = model<ICategoryType>('Category', categorySchema);

export default Category;
