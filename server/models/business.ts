// const mongoose = require('mongoose');
import { model, Schema } from 'mongoose';

//FixMe: review 'require' for all if pulling data from API (not mock)
//Resolution: No specified API to fetch from. Deciding to leave schema as is.
interface IBusinessType {
  _id: string;
  name: string;
  address: string;
  category: string;
  description: string;
  longDescription: string;
  website: string;
  openingHours: {
    [key: string]: OpenCloseHours;
  };
  contactInfo: string;
  coordinates: { lat: number; lng: number };
  images: [string];
}

interface OpenCloseHours {
  [key: string]: number;
}

//FixMe: review openingHours type (Number) -> (String)
//Resolution: Mock data is still hard coded. 
const businessSchema: Schema = new Schema<IBusinessType>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: { type: String, required: true },
  website: { type: String, required: true },
  openingHours: {
    Monday: {
      open: { type: Number, required: true },
      close: { type: Number, required: true },
    },
    Tuesday: {
      open: { type: Number, required: true },
      close: { type: Number, required: true },
    },
    Wednesday: {
      open: { type: Number, required: true },
      close: { type: Number, required: true },
    },
    Thursday: {
      open: { type: Number, required: true },
      close: { type: Number, required: true },
    },
    Friday: {
      open: { type: Number, required: true },
      close: { type: Number, required: true },
    },
    Saturday: {
      open: { type: Number, required: true },
      close: { type: Number, required: true },
    },
    Sunday: {
      open: { type: Number, required: true },
      close: { type: Number, required: true },
    },
  },
  contactInfo: String,
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  images: { type: [String], required: true },
});

const Business = model<IBusinessType>('Business', businessSchema);

module.exports = Business;
