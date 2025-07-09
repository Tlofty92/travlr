const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const travelerRouter = require('./app_server/routes/traveler');

const app = express();

// Set up Handlebars as the view engine
app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'app_server', 'views', 'layouts')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Register the traveler route
app.use('/traveler', travelerRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
