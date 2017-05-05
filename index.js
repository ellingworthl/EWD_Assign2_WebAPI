import React from 'react';
//import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../src/css/bootstrap.css';

//new import requirements for routing changes
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Landing from './FieldArcheryFinder/src/content/Landing';
import Main from './FieldArcheryFinder/src/content/Main';
import About from './FieldArcheryFinder/src/content/About';
import ReviewApp from './FieldArcheryFinder/src/ReviewApp';
import CommentView from './FieldArcheryFinder/src/commentPage'
import RegisterApp from './FieldArcheryFinder/src/registerApp';
import VenueApp from './FieldArcheryFinder/src/VenueApp';
import VenueDetail from './FieldArcheryFinder/src/venueDetail';
//EVENT import
import EventApp from './FieldArcheryFinder/src/eventApp';

// ReactDOM.render statement for routing
     ReactDOM.render(
         (
          <Router history={browserHistory} >
            <Route path="/" component={Main}>
               <IndexRoute component={Landing}/>
               <Route path='about' component={About} />
               <Route path='reviews' component={ReviewApp} />
               <Route path='posts/:postId' component={CommentView} />
               <Route path='venues' component={VenueApp} />
               <Route path="venue/:id" component={VenueDetail} />
               <Route path='events' component={EventApp} />			   
               <Route path='register' component={RegisterApp} />
            </Route>
          </Router>
        ),
          document.getElementById('root')
      );
