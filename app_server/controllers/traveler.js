exports.travelerHome = (req, res) => {
  res.render('traveler', {
    title: 'Traveler Home',
    welcomeMessage: 'Welcome to Travlr Getaways!',
    heroImage: '/images/hero.jpg',
    heroText: 'Your Adventure Starts Here!',
    featuredDestinations: [
      {
        name: 'Paris',
        image: '/images/paris.jpg',
        description: 'Experience the romance and culture of Paris.',
        link: '/destinations/paris'
      },
      {
        name: 'Tokyo',
        image: '/images/tokyo.jpg',
        description: 'Discover the vibrant city life and traditions of Tokyo.',
        link: '/destinations/tokyo'
      },
      {
        name: 'Sydney',
        image: '/images/sydney.jpg',
        description: 'Explore the stunning beaches and iconic Opera House.',
        link: '/destinations/sydney'
      }
    ],
    ctaText: 'Start Planning Your Getaway!',
    ctaLink: '/search'
  });
};
