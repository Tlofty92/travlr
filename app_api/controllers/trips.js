const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// Controller: Get all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller: Get a single trip by tripCode parameter
const tripsFindByCode = async (req, res) => {
  try {
    // Extract tripCode from URL params
    const tripCode = req.params.tripCode;

    // Query MongoDB for trip with matching code
    const trip = await Trip.findOne({ code: tripCode });

    if (!trip) {
      // Respond with 404 if not found
      return res.status(404).json({ message: 'Trip not found' });
    }

    // Respond with the trip data
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Export both controller functions for use in routes
module.exports = {
  tripsList,
  tripsFindByCode,
};
