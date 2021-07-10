const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
async function init() {
  const res = await db.sequelize.authenticate();
  const response = await db.sequelize.sync();
  app.listen("3000", () => {
    console.log("The server is on");
  });
}

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.post('/submitForm', async function(req, res){
    const { name, age,gender,homeLocation, maritalStatus,education, employment, income, religion, language } = req.body
    const surveyInstance = await db.sequelize.models.surveyform.create({name, age,gender,homeLocation, maritalStatus,education, employment, income, religion, language});
    console.log(surveyInstance);
    return res.send({message: 'Successfully Saved'});
});

init();