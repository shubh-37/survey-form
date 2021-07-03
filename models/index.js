const db = {};
const { Sequelize, Model, DataTypes } = require('sequelize');

const user = 'postgres'
const host = 'localhost'
const database = 'postgres'
const password = '1234'
const port = '5432'

const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false
  });

  class SurveyForm extends Model {}
  SurveyForm.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "age",
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "gender",
      },
      homeLocation: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "home_location",
      },
      maritalStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "marital_status",
      },
      education: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "education",
      },
      employment: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "employment",
      },
      income: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "income",
      },
      religion: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "religion",
      },
      language: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        field: "language",
      },
    },
	{ sequelize, modelName: 'surveyform' }
  );

  console.log(SurveyForm === sequelize.models.surveyform); // true  

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;