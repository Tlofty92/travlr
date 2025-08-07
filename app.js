const express = require('express');
const { engine } = require('express-handlebars');  // Handlebars engine
const path = require('path');
const app = express();


// Register express-handlebars as the view engine
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: false }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


// Serve static assets (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));


// Connect to MongoDB using Mongoose
// Adjust this path if your db.js is located somewhere else inside app_api/models/
require('./app_api/models/db');


// API routes (RESTful endpoints)
const apiRouter = require('./app_api/routes/index');
app.use('/api', apiRouter);   // Mount API router under '/api'


// Existing website routes (MVC routes)
const travelerRoutes = require('./app_server/routes/traveler');
const travelRoutes = require('./app_server/routes/travel');

// Apply website routes
app.use('/', travelerRoutes);
app.use('/travel', travelRoutes);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

