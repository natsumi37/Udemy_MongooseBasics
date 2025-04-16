const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://{{MongoId&Password}}@mongoosebasics.uyvth.mongodb.net/?retryWrites=true&w=majority&appName=MongooseBasics';

mongoose.connect(mongoUrl)
.then(() => {
  console.log('Connected to Mongo Cluster')
})
.catch((err) => {
  console.log('ERROR:')
  console.log(err)
})

const personSchema = new mongoose.Schema({
  first: String,
  last: String
})

personSchema.virtual('fullName').get(function() {
  return `${this.first} ${this.last}` // virtual - fullNameはデータベースに登録されず、プログラム上でのみ参照可
})

personSchema.pre('save', async function() {
  console.log('ABOUT TO SAVE')
})
personSchema.post('save', async function() {
  console.log('JUST SAVED')
})

const Person = mongoose.model('Person', personSchema);

const Kristen = new Person({first: 'Kristen', last: 'Sun'});
console.log(Kristen.fullName)

Kristen.save()
// const Tammy = new Person({first: 'Tammy', last: 'Chow'})
// Tammy.save();
// console.log(Tammy.fullName)