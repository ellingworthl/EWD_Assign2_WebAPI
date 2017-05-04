const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const EventsSchema = new Schema({
  round: { type: String, required: true }, 
  venue: { type: String, required: true }, 
  date: { type: Date, required: true }, 
  updated: { type: Date, default: Date.now }
});

export default mongoose.model('events', EventsSchema);