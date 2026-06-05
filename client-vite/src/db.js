const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URI);

module.exports = mongoose;
