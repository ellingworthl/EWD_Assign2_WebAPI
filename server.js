import config from './config';
import express from 'express';
import eventsRouter from './api/Events';
import reviewsRouter from './api/Reviews';
import body_parser from 'body-parser';
import mongoose from 'mongoose';
import {loadEvents} from './eventData';
import {loadPosts} from './reviewData';
//import {Mockgoose} from 'mockgoose'; //Lab4
//import {nodeEnv}  from './config'; //Lab4

const server = express();


mongoose.createConnection(config.mongoDb);
// Populate DB with sample data
if(config.seedDb) { 
	loadEvents();
	loadPosts(); 
}

//configure body-parser
server.use(body_parser.json());
server.use(body_parser.urlencoded());
server.use('/api/Events', eventsRouter);
server.use('/api/Reviews', reviewsRouter);
//server.use('/api/Venues', venuesRouter);
//server.use('/api/venueDetails', detailsRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});