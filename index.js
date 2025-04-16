const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://{{MongoId&Password}}@mongoosebasics.uyvth.mongodb.net/?retryWrites=true&w=majority&appName=MongooseBasics';

mongoose.connect(mongoUrl)
.then(() => {
  console.log('Connected to Mongo Cluster');
})
.catch((err) => {
  console.log('Error:');
  console.log(err);
})

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
})

const Movie = mongoose.model('Movie', movieSchema);

// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });
// amadeus.save();

// Movie.insertMany([
//   { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//   { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//   { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//   { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//   { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
// .then((data) => {
//   console.log('It worked');
//   console.log(data);
// })

// Movie.find({year: {$lt: 2000}}).then(data => console.log(data));

// Movie.updateOne({title: 'Amadeus'}, {year: 1984}).then(res => console.log(res));

// Movie.updateMany({title: {$in: ['Amadeus', 'Stand By Me']}}, {score: 10}).then(res => console.log(res));

// Movie.find({title: {$in: ['Amadeus', 'Stand By Me']}}).then(data => console.log(data));

// Movie.findOneAndUpdate({title: 'The Iron Giant'}, {score: 7.8}, {new: true}).then(data => console.log(data));

// Movie.deleteOne({title: 'Amelie'}).then(res => console.log(res));

// Movie.deleteMany({year: {$gte: 1999}}).then(res => console.log(res));

// Movie.findOneAndDelete({title: 'Alien'}).then(data => console.log(data));

Movie.find({}).then(data => console.log(data));
