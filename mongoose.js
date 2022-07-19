const mongoose = require('mongoose');

const Product = require('./models/products');

mongoose.connect(
    'mongodb+srv://placeadmin:<PASSWORD>@cluster0.b8nkm.mongodb.net/?retryWrites=true&w=majority'
).then(() => {
    console.log('Conncted to a database');
}).catch((error) => {
    console.log(error)
    console.log('Connection Fails');
});

const createProducts = async (req, res, next) => {
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });
    const result = await createdProduct.save();

    res.json(result);

}

const getProducts = async (req, res, next) => {
    const products = await Product.find().exec()
    res.json(products);
}

exports.createProducts = createProducts;
exports.getProducts = getProducts;