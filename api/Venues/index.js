import express from 'express';
import _ from 'lodash';
import mongoose from 'mongoose';
import Venue from './venuesModel';
import config from './../../config';

//Connect to database
//mongoose.connect(config.mongoDb);

const router = express.Router();

//Return all VENUES
router.get('/', (req, res) => {
  Venue.find((err, venues) => {
    if(err) { return handleError(res, err); }
    return res.send({venues});
  });
});


//Add a VENUE
router.post('/', (req, res) => {
     const newVenue = req.body;
    if (newVenue){
           Venue.create(newVenue, (err, venue) => {
              if(err) { return handleError(res, err); }
                 return res.status(201).send({venue});
          });
      }else{
         return handleError(res, err);
      }
});

//Update a VENUE
// check text, should it be " return res.send({venue});"
router.put('/:id', (req, res) => {
   let key = req.params.id;
   let updateVenue = req.body;
   if(updateVenue._id) { delete updateVenue._id; }
   Venue.findById(req.params.id,  (err, venue) => {
      if (err) { return handleError(res, err); }
        if(!venue) { return res.send(404); }
            const updated = _.merge(venue, req.body);
            updated.save((err) => {
                  if (err) { return handleError(res, err); }
                          return res.send(venue);
            });
      });
});

//Delete a VENUE
// check text, should it be " return res.send({venue});"
router.delete('/:id', (req, res) => {
   let key = req.params.id;
   Venue.findById(key, (err, venue)=> {
    if(err) { return res.status(400).send(err);}
    if(!venue) { return res.send(404); }
    venue.remove(err => {
      if(err) { return handleError(res, err); }
      return res.send(venue);
    });
  });   
});

function handleError(res, err) {
  return res.status(500).send(err);
};

export default router;