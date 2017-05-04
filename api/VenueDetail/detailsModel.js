const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const detailsSchema = new Schema({
  name: String,
  address: String,
  age: { type: Number, min: 0, max: 120 },
  email: String,
  updated: { type: Date, default: Date.now }
});

export default mongoose.model('details', detailsSchema);