const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  svgIcon: { type: String, required: true },
  image: { type: String, required: true },   
  description: { type: String },             
});

const Category = mongoose.model('Category', categorySchema);

export default Category