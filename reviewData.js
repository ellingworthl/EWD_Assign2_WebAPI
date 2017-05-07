import reviewModel from './api/Reviews/reviewsModel';
import mongoose from 'mongoose';
import assert from 'assert';
import config from './config';

//removed id, MongoDB assigns ObjectID / _ID

const  reviews = [
      { title : 'IFAF is great for Field Archery in Ireland',
        link : 'http://ifaf.ie/wordpress/',
        forename : 'Marion',
        surname : 'Hood',
        association : 'IFAF',
        comments : [],
        upvotes : 10
      },
     { 
        title : 'International Field Archery Assn: Q1 2017 newsletter is out!',
        link : 'http://www.ifaa-archery.org/index.php/ifaa-newsletters/2017',
        forename : 'William',
        surname : 'Tell',
        association : 'FAAS',
        comments : [],
        upvotes : 9
      },
      { 
        title : 'Membership in NFAS (UK) nearing 10k',
        link : 'http://www.nfas.net/home.asp',
        forename : 'Rob',
        surname : 'Hood',
        association : 'EFAA',
        comments : [],
        upvotes : 5
      },
      { 
        title : 'New site with loads of FREE online archery games. Great fun.',
        link : 'http://www.bgames.com/archery-games/',
        forename : 'Friar',
        surname : 'Tuck',
        association : 'AAE',
        comments : [],
        upvotes : 2
      },
      { 
        title : 'Latest post reviewData.js for Assignment2.',
        link : 'https://github.com/ellingworthl/EWD_Assign2_WebAPI',
        forename : 'Lynn',
        surname : 'Ellingworth',
        association : 'EWD',
        comments : [],
        upvotes : 2
      }	  
      ] ;

export const loadReviews = ()=>{
reviewModel.find({}).remove(function() { 
    reviewModel.collection.insert(reviews, (err,docs)=>{
    if (err){
      console.log(`failed to Load Review Data`);
    }
    else{
      console.info(`${reviews.length} Reviews were successfully stored.`);
    }
  })
});
}