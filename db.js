const mongoose = require('mongoose');

mongoose.set('debug', true);  // Enable debugging for Mongoose

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'));

module.exports = db;