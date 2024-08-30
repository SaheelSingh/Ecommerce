const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    rating: [
        {
            rate: Number,
            count: Number
        }
    ]
})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product


Product.insertMany({
    "name": "Demon Slayer Zenitsu Agatsuma Bobble Head",
    "imageUrl": "https://rukminim1.flixcart.com/image/416/416/kn97te80/action-figure/z/t/t/demon-slayer-zenitsu-agatsuma-bobble-head-with-mobile-holder-sh-original-imagfz9khfkv4aje.jpeg?q=70",
    "description": "GCT Bobbleheads doesn't need batteries. It's head will bobble while the Car is Moving. You can also keep it on your Office Desk or Study Table. Tap its head and it will Bobble. Drawer Base can be used as Mobile Phone Holder / Stand. Double Sided Adhesive Tape is also included. Great Companion for any Road Trip or Long Commute. Simply watch them bob their cute little heads to glory. Ideal for gifting to Men, Women, Kids, Boys, Girls, Couple, Friends, Husband, Wife. The most fabulous gift for your friends and family.",
    "category": "toy",
    "quantity": 1,
    "price": 454,
    "rating": [
        {
            "rate": 4.8,
            "count": 30
        }
    ]
})