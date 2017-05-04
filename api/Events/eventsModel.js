const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const EventsSchema = new Schema({
  round: String,
  venue: String,
  date: Date,
  updated: { type: Date, default: Date.now }
});

export default mongoose.model('events', EventsSchema);