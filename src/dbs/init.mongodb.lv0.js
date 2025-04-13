'use strict';

const mongoose = require('mongoose');

const connectString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

mongoose.connect(connectString).then(() => {
  console.log("Connected to MongoDB successfully");
}).catch((err) => {
  console.log("Error connecting to MongoDB", err);
});

// dev
if (1 === 1) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}

module.exports = mongoose;
// Thiết lập 1 kết nối mới cho mỗi lần export hoặc require
// Nhiều kết nối được tạo ra khi có nhiều lần require 

