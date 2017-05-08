# Assignment 2 - Web AIP integration with ReactJS app.

Name: Lynn Ellingworth

## Overview.
My hobby is field archery. When I first started out I found that it was quite difficult to find some shoot grounds, particularly those set on Coilte forestry as road signage is pretty scarce a lot of the time. I also remember when I was new to field archery that I couldn't 'just' look-up details about the club/venue as their information wasn't persistent on the associations' website at the time. The third thing is as we are a small community we often comment it would be nice to be able to post 'shoot reviews' to share with the host club, archers in the same target group and the wider community... if only we had such a facility?

With FAF, the objective is to help existing and new archers find field archery venues, clubs and their ranges, and be able to submit reviews about the club/an event they attend. Share the experience and grow the sport...

Having these facilities on one site would be terribly handy and would have a broad appeal to all involved in the sport.


## List of user features (excluding user registration and authentication)
 Assignment 2 - extension of ReactJS SPA App from Assignment 1
 + Venues
 Persistent data from single file (JSON)
 Feature to list all archery venues which can be filtered (.json file) which can be sorted &/or filtered
 
 + Venue Details
 Persistent data from individual files (JSON)
 Feature to drill-down to an individual venue to access specific details about it e.g. range-type, images and blub representing the club, directions and on-site facilities (also stored on json file)
 
 + Events
 Persistent data from API (JSON file) listed on Events screen
 Ability to add an event using Round, Venue and Date fields (data saved to local storage)
 Ability to edit an event (data saved to local storage)
 Ability to delete an event (data removed from local storage) 
 Ability to cancel changes applied to restore/revert to original event data (no update saved to local storage)
 
 Assignment 1 - SPA ReactJS App (Exisiting Features)
 + Reviews
 Persistent data from API (JSON file) listed on Review screen
 Ability to add a review using comment title and link (URL) data entry (saved to local storage)
 Ability to comment on existing reviews posted through Comment link, which opened a child page where feedback comment and reviewers name can be entered (saved to local storage)
 Ability to upvote both the main reviews and feedback comments linked to the reviews. 
 
 + About
 Ability to trigger an email to the site administrator to request venue be added (embedded email link)
 
## Installation requirements.
 Assignment 2 - Web API project folder "EWD_Assign2_WebAPI"
 + babel-cli@6.24.1
 + babel-preset-es2015@6.24.1
 + babel-preset-node6@11.0.0
 + babel-preset-stage-2@6.24.1
 + body-parser@1.17.1
 + bootstrap@3.3.7
 + css-loader@0.27.3
 + express@4.15.2
 + lodash@2.4.2
 + mongodb@2.2.26
 + mongoose@4.9.7
 + nodemon@1.11.0
 + react@15.4.2
 + react-boostrap-carousel@2.0.4
 + react-dom@15.4.2
 + react-router@2.8.1
 + react-scripts@0.2.1
 + superagent@3.5.2
 
 Assignment 1 - Client / SPA App folder "FieldArcheryFinder"
 + axios@0.16.1
 + bootstrap@3.3.7
 + css-loader@0.27.3
 + lodash@2.4.2
 + react@15.4.2
 + react-boostrap-carousel@2.0.4
 + react-dom@15.4.2
 + react-router@2.8.1
 + react-scripts@0.2.1
 + superagent@3.5.2


 Assignment 2
 + A user must install MongoDB
 + After installing, create a data and db file in the same directory as MongoDb installed (e.g. C:\data\db)
 + To launch MongoDb, go to the bin folder and double-click on the "mongod" application (e.g. C:\Program Files\MongoDB\Server\3.4\bin)
 
 To view the application, clone it from the repository (https://github.com/ellingworthl/EWD_Assign2_WebAPI)
 1) Start Express (port 8080)
 + Open a command window in the repositiory folder "EWD_Assign2_WebAPI" (hold Shift Key & right-click the mouse)
 + type npm install
 + type npm start 

 2) Start Client (port 3000)
 + Open a command window in the repositiory folder "FieldArcheryFinder"
 + type npm install
 + type npm start 

 
## Web API integration with ReactJS SPA
 I am unable to get my client application on localhost:3000 to retrieve the API data for Events, Venue and Venue Details and Reviews which has been successfully seeded to the FAF database in MongoDB.

 I can see the objects within each collection in my browser if I search any of the API paths (e.g. localhost:8080/api/events), however, none of the db objects are returned in the App for Events or Reviews. 
![][image11]
 
 
 Using Robomongo, a visual tool designed to help manage Database MongoDB, the images below show the four API's loaded into MongoDB as Collections (Details, Events, Reviews & Venues) in the FAF database
![][image7]

![][image8] 
 
 
 Using Postman, the data from the API's can be seen being returned via the Express server on port 8080
 + localhost:8080/api/details
 + localhost:8080/api/events
 + localhost:8080/api/reviews
 + localhost:8080/api/venues
![][image9]
 
  
 Using Chrome, the same localhost paths checked in Postman return the objects in each of the collections in the FAF db on MongoDB:
![][image10] 
 
## Data Model Design.
Exension of SPA for Assignment 2 - VenueApp code (SPA):
![][image1]

Assignment 2, illustration of .js files supporting WebAPI integration & MongoDB collection seeding:
![][image2]
 

## App Component Design.

A diagram showing the app's hierarchical component design (see example below). 

![][image3]


## UI Design.
This diagramatic image also shows the app's design and its components
![][image4]

+ The images show the Venues listing page (VenueApp.js) page in full and collapsed view format. Notice how the Navigation bar resizes itself and changes its format based on sceen-size.
+ Full-screen, the content has state determined by the Name search
+ Collapsed screen, content has state determined by sort dropdown menu selection of 'County' (versus 'Name').
+ Full-screen page contains react components VenueApp, NavBar, Footer. 
+ Both pages have formatting from bootstrap Carousel and half-slider CSS styling as well as additional VenueApp CSS styling.

![][image5]

![][image6]


## Routing.
 List each route supported and state the associated view . . . . . 
 
 Assignment 2 - extension of SPA App from Assignment 1
+ /venues - dynamic content added. Lists venues. App contains logo and summary information for each venue. List sortable using either Name or County and searchable by Venue name. CSS modified to expand container & resize image.
+ /venues/:venueid - shows detailed information about each venue (API). HeaderSection component created. Detail reorder in terms of importance, listing specific detail about the club. Venue Display reordered (Header, Information, then images). CSS modified to increase dimensions of Information section.
+ /events - new, dynamic react component created and routing updated to support eventsApp (API). Bootstap CCS applied to change table styling.
+ /register - firebase authorisation not completed, log-in container and bootstrap CSS only applied

 Assignment 1 - SPA ReactJS App (Exisiting Features)
+ /root for app (IndexRoute = Landing.js)
+ /about - descriptive text about the app
+ /venues - will show list of venues (React component under construction, static page currently)
+ /reviews - comments with link and upvotes (API)
+ /reviews/:postid - allows reviewer to comment, leave name & upvote an existing review (local storage)
+ /register - will allow a reviewer to register (under construction)


## Independent learning.
State the non-standard aspects of Angular (or other related technologies) that you researched and applied in this assignment . . . . .  
This semester and this assignment has been a phenominal learning curve for me. In spite of working in IT I have no coding background at all.

For Assignment 2 I have used:
+ https://robomongo.org/
+ https://www.getpostman.com
+ https://cloud.mongodb.com/user#/login?nds=true
+ https://docs.mongodb.com/manual/reference/mongo-shell/
+ https://www.mongodb.com/cloud/atlas/lp/try-2?jmp=search&utm_source=google&utm_campaign=EMEA-UK-IE-MongoDB-to-Atlas-Brand-Beta&utm_keyword=%2Bmongodb&utm_device=c&utm_network=g&utm_medium=cpc&utm_creative=184482994740&utm_matchtype=b&_bt=184482994740&_bk=%2Bmongodb&_bm=b&_bn=g&gclid=CInmkv_rvdMCFWu-7QodcKINKw
+ https://www.npmjs.com/package/mongodb
+ https://mongodb.github.io/node-mongodb-native/

For Assignment 1
I relied heavily on a brilliant react tutorial on YouTube:
https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started

I also found this site very good for very simple breakdown of principles of a SPA
https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm

To help with building the FAF app I have used:
+ https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b
+ https://github.com/learncodeacademy/react-js-tutorials
+ https://css-tricks.com/css-modules-part-3-react/
+ http://stackoverflow.com/questions/41515468/custom-stylesheet-in-react-app 
+ http://magic.reactjs.net/htmltojsx.htm
+ http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-navbar.php
+ http://jsonlint.com/
+ http://www.favicon.cc/
+ https://startbootstrap.com/template-overviews/half-slider/
+ http://bootsnipp.com/snippets/featured/clean-modal-login-form
+ https://github.com/tylermcginnis/react-router-firebase-auth
+ http://resizeyourimage.com/EN/

Installed, but not used:
+ https://www.npmjs.com/package/generator-react-webpack-scaffold

Registered for but not used (intended for Venue Detail pages):
+ https://developers.google.com/maps/documentation/android-api/signup


Additional learning 
Assignment 2
+ https://docs.mongodb.com/manual/reference/mongo-shell/
+ https://www.digitalocean.com/community/tutorials/how-to-connect-node-js-to-a-mongodb-database-on-a-vps
+ https://www.youtube.com/watch?v=pWbMrx5rVBE
+ https://www.youtube.com/watch?v=nN2JlbVWy2k&t=40s
+ https://www.youtube.com/watch?annotation_id=annotation_1262334303&feature=iv&src_vid=5e1NEdfs4is&v=ndKRjmA6WNA
+ https://www.youtube.com/watch?v=U8XF6AFGqlc
+ https://www.youtube.com/watch?v=gnsO8-xJ8rs
+ http://stackoverflow.com/ (multiple queries about MongoDB and Mongoose.)
+ http://mongoosejs.com/
+ http://www.tutorialspoint.com/mongodb/
+ https://ddrohan.github.io/wit-wad/topic02-node/talk-3-node-3/node.3.pdf

Assignment 1
+ Head First: JavaScript
+ Head First: HTML and CSS
+ https://www.w3schools.com
+ https://www.youtube.com/playlist?annotation_id=annotation_270691829&feature=iv&list=PLoYCgNOIyGACDQLaThEEKBAlgs4OIUGif&src_vid=MhkGQAoc7bc
+ https://www.youtube.com/watch?annotation_id=annotation_3748334139&feature=iv&src_vid=9kJVYpOqcVU&v=pU9Q6oiQNd0
+ https://www.youtube.com/watch?v=Ybn6Q92m4xg
+ https://www.lifewire.com/list-of-command-prompt-commands-4092302

## Other tools/applications
GitHub shell - easier management of GitHub versioning
Sublime Text Editor (preferred over GIT Bash) - text editor tool
Notepad++ - text editor tool
Robomongo - a MongoDB management tool with GUI interaction & Command line shell capabilities

[image1]: ./ReadMe_Images/Assignment2_VenueFAFCode.png
[image2]: ./ReadMe_Images/Assignment2_VenueCode.png
[image3]: ./ReadMe_Images/Assignment2_Design.png
[image4]: ./ReadMe_Images/Assignment2_Model.png
[image5]: ./ReadMe_Images/Assignment2_FullScreen.png
[image6]: ./ReadMe_Images/Assignment2_CollapsedScreen.png
[image7]: ./ReadMe_Images/Assign2_Robomongo_Events&Reviews.png
[image8]: ./ReadMe_Images/Assign2_Robomongo_Details&Venues.png
[image9]: ./ReadMe_Images/Assign2_Postman8080_GET.png
[image10]: ./ReadMe_Images/Assign2_LocalHost8080_APIs.png
[image11]: ./ReadMe_Images/Assign2_Events-Reviews_3000.png
