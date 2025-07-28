const express = require('express');
const { engine } = require('express-handlebars');  // Handlebars engine
const path = require('path');
const app = express();

// Register express-handlebars
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: false }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Static assets (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route modules
const travelerRoutes = require('./app_server/routes/traveler');
const travelRoutes = require('./app_server/routes/travel');

// Apply routes
app.use('/', travelerRoutes);
app.use('/travel', travelRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
