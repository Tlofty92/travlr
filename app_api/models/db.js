const mongoose = require('mongoose');

// MongoDB connection string; replace with your MongoDB URI if different
const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost:27017/travlr';

// Connect to MongoDB via mongoose (no need for deprecated options)
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define the Trip schema
const tripSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true }, // unique trip code
  name: { type: String, required: true },               // name of the trip
  description: { type: String },                         // description
  price: { type: Number },                               // example field: price
  duration: { type: Number },                            // example field: duration in days
  location: { type: String }                             // example field: location name
  // Add other fields as needed
});

// Register the Trip model with mongoose
mongoose.model('Trip', tripSchema);

module.exports = db;
