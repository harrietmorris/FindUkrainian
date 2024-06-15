// const mongoose = require('mongoose');
import { model, Schema } from 'mongoose';

interface ICategoryType {
  name: {
    en: string;
    uk: string;
  };
  description: {
    en: string;
    uk: string;
  };
}

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

module.exports = Category;
