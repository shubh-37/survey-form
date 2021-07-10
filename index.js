const express = require('express'); //initialises the express module
const bodyParser = require('body-parser'); //initialises the body parser module
const db = require('./models'); //initialises the database location
const app= express();  // stores the express module in app variable
    async function init(){  //this function checks if the database is working and then starts the server
        const res = await db.sequelize.authenticate();
		const response = await db.sequelize.sync();
        app.listen('3000', () => {
            console.log("The server is on");
        })
    }
   
// parse application/json
app.use(bodyParser.json())   //this is middleware, used to separate the data coming in the form of string from json into objects
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(express.static('public')) //To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

app.post('/submitForm', async function(req, res){ //
    const { name, age,gender,homeLocation, maritalStatus,education, employment, income, religion, language } = req.body
    const surveyInstance = await db.sequelize.models.surveyform.create({name, age,gender,homeLocation, maritalStatus,education, employment, income, religion, language});
    console.log(surveyInstance);
    return res.send({message: 'Successfully Saved'});
});

init();