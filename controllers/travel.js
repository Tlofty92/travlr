const fs = require('fs');
const path = require('path');

// Read trips.json once and cache 
const trips = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../data/trips.json'), 'utf8')
);

exports.travelList = function (req, res) {
  res.render('travel', {
    trips: trips,
    title: 'Travel Opportunities'
  });
};
