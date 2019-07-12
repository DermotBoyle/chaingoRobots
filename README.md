# chaingoRobots

Deployed with heroku : https://chaingorobots.herokuapp.com/api/robots

 
 *********************
 
 General Notes :
 
 I really enjoyed this task, especially getting to grips with MongoDB and Docker! I am quite satisfied that I was
 able to get the CRUD methods working, the site deployed to Heroku and a functioning Docker with tests. Now that I
 reflect upon the task I would love to add more fun funtions to the API but was really more focused on showing that
 I could handle the task effectively with a lot of new technologies. 
 
 ***********************

Technologies:

For this task I used a Mongo database, Mongoose for the HTTP methods built with with Node/ExpressJS.

I decided to use MongoDB first of all as I believed it was well suited to creating robot objects (JSON format)
which is essentially what the task required.

As I was working with MongoDB I in turn used Mongoose for the CRUD methods. Both MongoDB and Mongoose
are technologies I had not previously used much (except for API calls to an existing MongoDB) and I enjoyed
learning a great deal about them in this task!

***********************

API:

The API has full CRUD funcitonality which I originally tested using Postman and then further tested
using Mocha and SuperTest.

It is possible to GET information :
 By name : /api/robots/:name
 By _ID: /api/robots/:id
 By weapon : /api/robots/weapons/laser
 By armour : /api/robots/weapons/invisiblefield
 All robots : /api/robots
 
 It is possible to PUT(update) information:
 By _ID & all attributes can be updated: /robots/:id => 
 (body)
 "weapons": {
            "weapon": "laser",
            "serialnumber": "W939393"
        }
        
 
 It is possible to CREATE robot objects:
 
 Features that I included are that each robot object created must at least have a type and name.
 I've also added a condition field which takes a boolean to show if a robot is operational or not.
 
 create = /api/robots
 (body)
 "weapons": {
            "weapon": "laser",
            "serialnumber": "W939393"
        },
        "armours": {
            "armour": "invisible field",
            "serialnumber": "A010101"
        },
        "condition": true,
        "_id": "5d261e3abc41aa00178d99d1",
        "type": "AttackRobot",
        "name": "DermoBot",
        }
 
 It is possible to DELETE robot objects:
 By _ID: /robots/:id
 By Name: /robots/:name
 
 It is possible to test this out for yourself using swagger.com and https://chaingorobots.herokuapp.com/api/robots
 
 *****************************
Testing :

I tested functionality of my CRUD methods originally with Postman and then with Mocha/Supertest. Tests are operational within docker.
The next step for my testing would have been to create a mock DB using mock-mongoose for testing but I hope the tests
illustrating functionality has been sufficient for this task.

Swagger was used to post the existing data to the deployed api and test the routes were functional.

*****************************
Docker :

The project does have a docker build and test feature upon build.
The DB was connected using Docker-compose.

** I have noticed that the GET method fails upon the first load of the docker file, but will pass any subsequent rerun of the test.
It would seem to have something to do with the connection to the MongoDB taking a second longer to connect. **
 

 
 
 
 
