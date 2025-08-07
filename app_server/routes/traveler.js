const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('traveler', {
    title: 'Welcome to Travlr',
    heroImage: '/images/beach.jpg',
    heroText: 'Explore the World with Travlr!',
    welcomeMessage: 'Your next adventure awaits.',
    featuredDestinations: [
      {
        name: 'Paris',
        description: 'The City of Lights and Love.',
        image: '/images/paris.jpg',
        link: '/travel'
      },
      {
        name: 'Tokyo',
        description: 'Experience the vibrant culture of Japan.',
        image: '/images/tokyo.jpg',
        link: '/travel'
      },
      {
        name: 'Sydney',
        description: 'Discover the wonders of Down Under.',
        image: '/images/sydney.jpg',
        link: '/travel'
      }
    ],
    ctaLink: '/travel',
    ctaText: 'View All Trips'
  });
});

module.exports = router;
