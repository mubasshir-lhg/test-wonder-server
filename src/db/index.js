const mongoose = require('mongoose');
const db = mongoose.connection;

const { DATABASE_URL, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } =
  process.env;

mongoose.connect(
  `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URL}/${DATABASE_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Database is now connected');
});
