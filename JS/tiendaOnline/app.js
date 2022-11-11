// import express from 'express';
// import { connect as _connect, Schema, model } from 'mongoose';
// const app = express();

// const uri = 'mongodb+srv://Marcote:12345@cluster0.aniim6e.mongodb.net/?retryWrites=true&w=majority'

// async function connect() {
//     try {
//         await _connect(uri);
//         console.log("Connected to MongoDB")
//     } catch (err) {
//         console.error(err)
//     }
// }

// connect();

// export async function create() {
//     console.log("Hago algo")
//     const productSchema = new Schema({
//         id: String,
//         name: String
//     }, { autoCreate: false, autoIndex: false });
//     const Product = model('Product', productSchema);

//     const RedactedProduct = model('RedactedProduct', productSchema);
//     await Product.createCollection();

//     await RedactedProduct.createCollection({
//         viewOn: 'RedactedProduct', // Set `viewOn` to the collection name, **not** model name.
//         pipeline: [
//             {
//                 $set: {
//                     id: '$id',
//                     name: '$name'
//                 }
//             }
//         ]
//     });
//     await Product.create([
//         {
//             id: 21312313,
//             name: "GTX 1080 TI"
//         }
//     ])

//     await Product.find({ name: "GTX 1080 TI" });
// }

// app.listen(8000, () => {
//     console.log("Server started on port 8000!")
// })

import { readFile} from 'fs-web';

readFile('/cesta.json', '/')

    .then((files) => {
        console.log(files)
    })