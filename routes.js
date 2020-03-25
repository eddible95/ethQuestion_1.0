const routes = require('next-routes')();

// Define a new route mapping
// Arguments: The pattern to look for, which route inside the page directory
// we want to display

routes
  .add('/', '/login')
  .add('/home', 'home')
  .add('/about', '/about')
  .add('/userProfile/:value', '/userProfile')
  .add('/feedback', '/feedback')
  .add('/admin', '/admin')
  .add('/new', '/newQuestion')
  .add('/questions/:value', '/showQuestion')
  .add('/search/:value', '/home')
  .add('/leaderboard', '/leaderboard')
  .add('/register', '/register');

module.exports = routes;
