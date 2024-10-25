const express = require('express');
const mongoose = require('mongoose');
const Product = require('./model'); // Your model with brandname, model, and imageUrl
const cors = require('cors');

const app = express();
app.use(express.json()); // Middleware for parsing JSON
app.use(cors());

mongoose.connect("mongodb+srv://sandeep:sandy999@cluster0.zpdvm.mongodb.net/myproject")
  .then(() => console.log('DB connected successfully..'))
  .catch(err => console.log(err));

// Route to add product with brandname, model, and imageUrl
app.post('/addproduct', async (req, res) => {
  const { name, price, imageUrl} = req.body;
  try {
    // Create new product with image URL
    const newProduct = new Product({ name, price, imageUrl});
    await newProduct.save();
    return res.json(await Product.find()); // Return updated list of products
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Error adding product' });
  }
});

// Route to get all products (brandname, model, image)
app.get('/getallproducts', async (req, res) => {
  try {
    const allData = await Product.find();
    return res.json(allData); // Return all products with image URL
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// Start server
app.listen(3001, () => console.log('Server is running on port 3001....'));