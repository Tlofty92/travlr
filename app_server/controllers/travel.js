// If using Node.js 18+, fetch is global. Otherwise, you need to require 'node-fetch'.

// Minimal controller using fetch with .then() and .catch()
exports.travelList = function (req, res) {
  // API endpoint URL
  const tripsEndpoint = 'http://localhost:3000/api/trips';

  // Fetch options specifying method and Accept header
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  };

  // Start fetch request
  fetch(tripsEndpoint, options)
    // First .then() gets the response and parses it as JSON
    .then(res => {
      if (!res.ok) {
        // If response is not OK, reject the promise with an error
        throw new Error(`API responded with status ${res.status}`);
      }
      return res.json();
    })
    // Second .then() handles the parsed JSON data
    .then(json => {
      // Debugging: log the JSON data to the console (PowerShell)
      // console.log(json);

      // Render the travel view, pass trips data mapped to key 'trips'
      res.render('travel', {
        title: 'Travlr Getaways',
        trips: json  // This replaces the previous static trips object
      });
    })
    // Catch any errors that occurred during fetch or json parsing
    .catch(err => {
      console.error('Error fetching trips:', err);
      // Respond with HTTP 500 and the error message
      res.status(500).send(err.message);
    });
};
