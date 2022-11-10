const { calculateObjectSize } = require('bson');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = 'mongodb+srv://Marcote:12345@cluster0.aniim6e.mongodb.net/?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB")
    } catch (err) {
        console.error(err)
    }
}

connect();

async function create() {
    const productSchema = new mongoose.Schema({
        id: String,
        name: String
    }, { autoCreate: false, autoIndex: false });
    const Product = mongoose.model('Product', productSchema);

    const RedactedProduct = mongoose.model('RedactedProduct', productSchema);



    await Product.createCollection();

    await RedactedProduct.createCollection({
        viewOn: 'RedactedProduct', // Set `viewOn` to the collection name, **not** model name.
        pipeline: [
            {
                $set: {
                    id: '$id',
                    name: '$name'
                }
            }
        ]
    });
    // await Product.create([
    //     {
    //         id: 21312313,
    //         name: "GTX 1080 TI"
    //     }
    // ])

    await Product.find({ name: "GTX 1080 TI" }).deleteMany();
}

create();



app.listen(8000, () => {
    console.log("Server started on port 8000!")
})

