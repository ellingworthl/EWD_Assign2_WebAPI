const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const DetailsSchema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true}, 
    description: {type: String, required: true}, 
    venuetype: {type: String, required: true},
    venuelink: {type: String, required: false},
    association: {type: String, required: true},
    facilitiesparking: {type: String, required: true},
    facilitiestoilet: {type: String, required: true}, 
    facilitiesrefresh: {type: String, required: false},
    facilitiesother: {type: String, required: false}, 
    directions: {type: String, required: true}, 
    images: {type: String, required: true}, 
    images1: {type: String, required: false}
});

export default mongoose.model('details', DetailsSchema);