const mongoose = require('mongoose');

// Schema for name, price, and image URL
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true } // Add imageUrl field
});

// Export the model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;