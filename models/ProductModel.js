var mongoose = require('mongoose');
var ProductSchema = mongoose.Schema({
   name: String,
   price: Number,
   category: String,
   class: String,
   image: String,
   stock: Number,
   gender: String,
   createdAt: {
      type: Date,
      default: Date.now
   }
});
const ProductModel = mongoose.model('product', ProductSchema, 'product');
module.exports = ProductModel;