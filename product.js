const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://Natsumi37:Kukita29509f@mongoosebasics.uyvth.mongodb.net/?retryWrites=true&w=majority&appName=MongooseBasics';

mongoose.connect(mongoUrl)
.then(() => {
  console.log('Connected to Mongo Cluster');
})
.catch((err) => {
  console.log('ERROR:')
  console.log(err);
})

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'MUST A POSITIVE NUMBER']
  },
  onSale: {
    type: Boolean,
    default: false
  },
  categories: {
    type: [String]
  },
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inStore: {
      type: Number,
      default: 0
    }
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L']
  }
})


// productSchema.methods.greet = function() {
//   console.log('HELLLO, HI, HOWDY!');
//   console.log(`-from ${this.name}`);
// }

productSchema.methods.toggleOnSale = function() {
  this.onSale = !this.onSale;  // methods - このthisは各インスタンス（データ）を参照
  return this.save();
}

productSchema.methods.addCategory = function(newCat) {
  this.categories.push(newCat);
  return this.save();
}

productSchema.statics.fireSale = function() {
  return this.updateMany({}, { onSale: true, price: 0 });  // statics - このthisはPriceモデル自体を参照
  // statics - 派手な変更を加えるときや、モデル全体の中で検索し一斉に変更を加える場合などに便利
}

const Product = mongoose.model('Product', productSchema);


// const findProduct = async() => {
//   const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
//   console.log(foundProduct);
//   // await foundProduct.toggleOnSale();
//   // console.log(foundProduct);
//   await foundProduct.addCategory('Mountain');
//   console.log(foundProduct)
// }

const findAllProduct = async() => {
  const foundAllProduct = await Product.find({});
  console.log(foundAllProduct);
}

Product.fireSale()
.then(res => console.log(res))
.then(findAllProduct());

// findProduct();

// const bike = new Product({ name: 'Bike Helmet', price: -99, onSale: true, categories: ['Cycling'], size: 'L' });
// bike.save()
// .then(data => {
//   console.log('IT WORKED');
//   console.log(data);
// })
// .catch(err => {
//   console.log('ERROR');
//   console.log(err);
// })

// Product.findOneAndUpdate({ name: 'Tire Pump'}, { price: 19.99 }, { new: true, runValidators: true })
// .then(data => {
//   console.log('IT WORKED');
//   console.log(data);
// })
// .catch(err => {
//   console.log('ERROR');
//   console.log(err);
// })