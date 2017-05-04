import express from 'express';
import _ from 'lodash';
import mongoose from 'mongoose';
import Club from './detailsModel';
import config from './../../config';

//Connect to database
//mongoose.connect(config.mongoDb);

const router = express.Router();

router.get('/', (req, res) => {
  Club.find((err, clubs) => {
    if(err) { return handleError(res, err); }
    return res.send({clubs});
  });
});

//Add club detail
router.post('/', (req, res) => {
    const newClub = req.body;
    if (newClub){
           Club.create(newClub, (err, club) => {
              if(err) { return handleError(res, err); }
                 return res.status(201).send({club});
          });
      }else{
         return handleError(res, err);
      }
});

//get a club
router.get('/:id', (req, res) => {
    const id = req.params.id;
   Club.findById(id, function (err, club) { 
        if(err) { return handleError(res, err); }
        return res.send({club});
  } );
            
});

//Update club detail
// check text, should it be " return res.send({club});"
router.put('/:id', (req, res) => {
   const key = req.params.id;
   const updateClub = req.body;
   if(updateClub._id) { delete updateClub._id; }
   Club.findById(req.params.id,  (err, club) => {
      if (err) { return handleError(res, err); }
        if(!club) { return res.send(404); }
            const updated = _.merge(club, req.body);
            updated.save((err) => {
                  if (err) { return handleError(res, err); }
                          return res.send(club);
            });
      });
});

//Delete club detail
// check text, should it be " return res.send({club});"
router.delete('/:id', (req, res) => {
   const key = req.params.id;
   Club.findById(key, (err, club)=> {
    if(err) { return res.status(400).send(err);}
    if(!club) { return res.send(404); }
    club.remove(err => {
      if(err) { return handleError(res, err); }
      return res.send(club);
    });
  });   
});

function handleError(res, err) {
  return res.status(500).send(err);
};

export default router; 