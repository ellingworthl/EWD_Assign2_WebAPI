import mongoose from 'mongoose';
import assert from 'assert';
import eventModel from './api/Events/eventsModel';
import config from './config';

//removed id, MongoDB assigns ObjectID / _ID

const events = [
    {
		"round": "IFAA Field",
        "venue": "Valley Bowmen",
        "date": "2017/04/23",
        "target_amt": "2x14"		
    },
    
    {	
        "round": "IFAA UAR",
        "venue": "Wexford Archery",
        "date": "2017/05/07",
        "target_amt": "1x28"	
    },
    
    {
		"round": "Hunting Trail",
        "venue": "South Cork Field Archers",
        "date": "2017/05/21"		,
        "target_amt": ">30"	
    },
    
    {
		"round": "SBG",
        "venue": "Mayo Archery Club",
        "date": "2017/06/04",
        "target_amt": "1x36"	
    },
	
    {
		"round": "IFAA UAR",
        "venue": "Ashgrove Archers",
        "date": "2017/06/18",
        "target_amt": "2x14"	
    }	
  ] ; 




export const loadEvents = ()=>{
eventModel.find({}).remove(function() { 
    eventModel.collection.insert(events, (err,docs)=>{
    if (err){
      console.log(`failed to Load Event Data`);
    }
    else{
      console.info(`${events.length} events were successfully stored.`);
    }
  })
});
}