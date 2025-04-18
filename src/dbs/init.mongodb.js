'use strict';

const mongoose = require('mongoose');
const connectString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

const { countConnection } = require('../helpers/check.connect');
class Database {
  constructor() {
    this.connect();
  }

  // connect
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    
    mongoose.connect(connectString,{
        maxPoolSize: 50,
    }).then(() => {
      console.log("Connected to MongoDB successfully", countConnection());
    }).catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
