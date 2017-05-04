const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const detailsSchema = new Schema({
    name: { type: String, required: true },     
    description:  {type: String, required: true },    
    venue: {
        type:  {type: String, required: true },
        link:  {type: String, required: false }
    }, 
    association: {
        govby:  {type: String, required: true },
    }, 
    
    facilities: {
        parking:  {type: String, required: true },
        toilet:  {type: String, required: true }, 
        refreshments:  {type: String, required: true },
        other:  {type: String, required: true }
    }, 
    directions: {
        where:  {type: String, required: true },
    },     
    images: { type: String, required: true }
	})

    var venuesSchema = new Schema({ 
      _id: { type: String, required: true }, 
      name: { type: String, required: true },
      snippet: { type: String, required: true },
      county: { type: String, required: true },
      phoneno: { type: String, required: true },
      imageUrl: { type: String, required: true },
      Details: [detailsSchema]
    });

    export default mongoose.model('venues', venuesSchema);
