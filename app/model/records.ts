import mongoose, { Schema } from 'mongoose';

const recordsSchema = new Schema(
  {
    name: {
      type: String,
    },
    count: {
      type: Number,
    },
    date: String,
    type: String,
    records: {
      type: Array,
    },
    id: {
      type: Number,
    },
  },
  { timestamps: true },
);

const Records =
  mongoose.models.records || mongoose.model('records', recordsSchema);

export default Records;
