# Assignment 2 - Web AIP integration with ReactJS app.

Name: Lynn Ellingworth

## Overview.
My hobby is field archery. When I first started out I found that it was quite difficult to find some shoot grounds, particularly those set on Coilte forestry as road signage is pretty scarce a lot of the time. I also remember when I was new to field archery that I couldn't 'just' look-up details about the club/venue as their information wasn't persistent on the associations' website at the time. The third thing is as we are a small community we often comment it would be nice to be able to post 'shoot reviews' to share with the host club, archers in the same target group and the wider community... if only we had such a facility?

With FAF, the objective is to help existing and new archers find field archery venues, clubs and their ranges, and be able to submit reviews about the club/an event they attend. Share the experience and grow the sport...

Having these facilities on one site would be terribly handy and would have a broad appeal to all involved in the sport.


## List of user features (excluding user registration and authentication) . . . . 
 
 + Feature to review an event through comment title and link (URL) data entry
 + Feature to comment on existing reviews posted through comment feedback and reviewers name data entry
 + Feature to upvote both the main reviews and the comments associated with those reviews. 
 + Feature to contact site administrator to request venue be added (embedded email link)
 
 Assignment 2 - extension of Client App
 + List of archery venues which can be filtered (json file data)
 + Drill-down capability to access further information about each venue e.g. range-type, images and blub representing the club, directions and on-site facilities (also stored on json file)
 + Events list for competitions (json file data) which can be added to, edited, or deleted.
 
## Installation requirements.
 + ReactJS
 + Bootstrap 3
 + create-react-app tool
 + react-router
 + webpack
 + css loader
 + superagent 
 
 Assignment 2
Config installs supporting Web API:
 + npm install --save-dev babel-cli
 + npm install --save-dev babel-preset-es2015 babel-preset-stage-2
 + npm install --save express
 + npm install --save-dev nodemon
 + npm install eslint babel-eslint
 + eslint --init
 + npm install --save body-parser
 + npm install --save lodash
 + npm install --save axios
 + npm install -save mongoose
 + npm install mongodb --save
 
 Config installs supporting API testing:
 + npm install --save-dev mocha
 + npm install --save-dev should
 + npm install --save-dev supertest
 + npm install babel-core
 + npm install --save-dev Mockgoose
 + npm install save-dev cross-env
 + npm run test
 + npm install --save-dev Mochawesome

For functionality under construction:
 Firebase (log-in validation)

In order to view the app after cloning it from the repository (EDW_Assign1_SPA), a viewer must
 + Open a command window in the repositiory folder (hold Shift Key & right-click the mouse)
 + type npm install 
 + type npm start
 + in browser view localhost://3000

 Assignment 2
To view the application, clone it from the repository (EDW_Assign2_WebAPI), a viewer must 
 + Open a command window in the repositiory folder (hold Shift Key & right-click the mouse)
 + type npm install 
 + type npm start 
 + enter the following in the browser: http//locahost/8080/FieldArcheryFinder/#/home  

 
## Data Model Design.

ReviewApp 
Sample of the data on that page (API):
    posts = [
     {  id: 1 ,
        title : 'IFAF is great for Field Archery in Ireland',
        link : 'http://ifaf.ie/wordpress/',
        forename : 'Marion',
        surname : 'Hood',
        association : 'IFAF',
        comments : [],
        upvotes : 10
      },

VenueApp (Completed as part of Assignment 2):
venue overview "clubs.json":
[ 
    {
        "age": 1, 
        "id": "Wexford",
        "upvotes": 5, 
        "imageUrl": "../images/Wexford.png", 
        "name": "Wexford Archery",
        "phoneno": "051 123456", 
        "county": "Wexford",
        "snippet": "New Ross"
    }, 

venue detail json (e.g. ashgrove.json):
{
    "id": "Ashgrove",

    "name": "Ashgrove Archers",

    "description": "The club take their name from a significant portion of the woodland available; ash! There's a hugh amount of ground available comprising of deciduous and evergreen forestry. The club mix and match their courses across the available woodland.", 

    "venue": {
        "type": "Outdoor range", 
        "link": "https://www.facebook.com/profile.php?id=100009143355252&fref=ts"
    }, 

    "facilities": {
        "parking": "Yes", 
        "toilet": "Yes", 
        "refreshements": "Yes - tea & coffee available", 
        "other": "Camping on-site and B&B by prior request"
    },     

    "directions": "From Waterford, take the N24 Waterford - Carrick On Suir road. Approximately 3.5 miles after turning onto the N24 turn right onto the L7431. Follow local 'shoot' signage.", 

    "amenities": {
        "shop": "Yes; approx 2 miles", 
        "garage": "Yes; approx 2 miles", 
        "accomodation": "Yes; in Mooncoin and Waterford"
    }, 

    "images": [
        "img/phones/Ashgrove2.jpg",
        "img/phones/Ashgrove1.jpg", 
        "img/phones/Ashgrove.jpg" 
    ] 
}	  
	  

## App Component Design.

A diagram showing the app's hierarchical component design (see example below). 

![][image2]


## UI Design.
The images show the Home (Landing.js) page in collapsed form and full-page format.

On this page there is the Main, NavBar, Carousel, high-level blurb on field archery and Footer.
 
![][image3]

![][image4]

This diagramatic image also shows the app's design and its components
![][image1]

## Routing.
 List each route supported and state the associated view . . . . . 

+ /root for app (IndexRoute = Landing.js)
+ /about - descriptive text about the app
+ /venues - will show list of venues (React component under construction, static page currently)
+ /reviews - comments with link and upvotes (API)
+ /reviews/:postid - allows reviewer to comment, leave name & upvote an existing review (local storage)
+ /register - will allow a reviewer to register (under construction)

Assignement 2 - Additional routing:
+ /venues - dynamic content added. Lists venues. App contains logo and summary information for each venue. List sortable using either Name or County and searchable by Venue name. CSS modified to expand container & resize image.
+ /venues/:clubid - shows detailed information about each venue (API). HeaderSection component created. Detail reorder in terms of importance.  will show specific detail about the club. Venue Display reordered (Header, Information, then images). CSS modified to increase Information section.
+ /events - new react component and routing to support eventsApp (API). Bootstap CCS applied.

## Extra features
Briefly explain any non-standard features, functional or non-functional (e.g. user registration, authentication) developed for the app . . . . . .  

One intended feature was Google maps, using Google API Key, in the Venue Detail component. The map, when added to Club.json read as plain text not URL. Using an embedded google map, as a component of Venue Detail resulted in a single map popluating all Detail pages. Ultimately, neither Map option has been used.


## Independent learning.
State the non-standard aspects of Angular (or other related technologies) that you researched and applied in this assignment . . . . .  
This semester and this assignment has been a phenominal learning curve for me. In spite of working in IT I have no coding background at all.

For this assignment I have religed heavily on a brilliant react tutorial on YouTube:
https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started

I also found this site very good for very simple breakdown of principles of a SPA
https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm

To help with building the FAF app I have used:
+ https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b
+ https://github.com/learncodeacademy/react-js-tutorials
+ https://css-tricks.com/css-modules-part-3-react/
+ http://stackoverflow.com/questions/41515468/custom-stylesheet-in-react-app (install css loader (npm install --save css-loader )
+ http://pastebin.com/sLvADsEN (css loaders, do npm install --webpack )
+ http://magic.reactjs.net/htmltojsx.htm
+ http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-navbar.php
+ http://jsonlint.com/
+ https://startbootstrap.com/template-overviews/half-slider/
+ http://bootsnipp.com/snippets/featured/clean-modal-login-form
+ https://github.com/tylermcginnis/react-router-firebase-auth
+ resizeyourimage.com/EN/#transform=&page_no=1&no_of_pages=1&filename=0.jpg&selection_top=36&selection_left=55&selection_width=437&selection_height=292&zoom=912&demomode=true

Installed, but not used:
+ https://www.npmjs.com/package/generator-react-webpack-scaffold

Registered for but not used (intended for Club Detail):
+ https://developers.google.com/maps/documentation/android-api/signup

For Assignment 2 I have used:
+ https://www.getpostman.com
+ https://cloud.mongodb.com/user#/login?nds=true
+ https://www.mongodb.com/cloud/atlas/lp/try-2?jmp=search&utm_source=google&utm_campaign=EMEA-UK-IE-MongoDB-to-Atlas-Brand-Beta&utm_keyword=%2Bmongodb&utm_device=c&utm_network=g&utm_medium=cpc&utm_creative=184482994740&utm_matchtype=b&_bt=184482994740&_bk=%2Bmongodb&_bm=b&_bn=g&gclid=CInmkv_rvdMCFWu-7QodcKINKw
+ https://www.npmjs.com/package/mongodb
+ https://mongodb.github.io/node-mongodb-native/
+ https://robomongo.org/


Additional learning has been through the following:
+ Head First: JavaScript
+ Head First: HTML and CSS
+ https://www.w3schools.com
+ https://www.youtube.com/playlist?annotation_id=annotation_270691829&feature=iv&list=PLoYCgNOIyGACDQLaThEEKBAlgs4OIUGif&src_vid=MhkGQAoc7bc
+ https://www.youtube.com/watch?annotation_id=annotation_3748334139&feature=iv&src_vid=9kJVYpOqcVU&v=pU9Q6oiQNd0
+ https://www.youtube.com/watch?v=Ybn6Q92m4xg
+ https://www.lifewire.com/list-of-command-prompt-commands-4092302

For Assignment 2 I have used:
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

[image1]: ./Assignment1_Design.png
[image2]: ./Assignment1_Model.png
[image3]: ./Assignment1_Screen_Collapsed.png
[image4]: ./Assignment1_Screen_FullScreen.png
"# EWD_Assign2_WebAPI" 
"# EWD_Assign2_SPA-WebAPI" 
