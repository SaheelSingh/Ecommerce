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


Product.insertMany(
    [
        {
            "name": "Apple iPhone",
            "imageUrl": "https://m.media-amazon.com/images/I/31gmva12KHL._SY445_SX342_QL70_FMwebp_.jpg",
            "description": "6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display Water and dust resistant (2 meters for up to 30 minutes, IP68)",
            "category": "mobile",
            "quantity": 1,
            "price": 69000,
            "rating": [
                {
                    "rate": 4.5,
                    "count": 145
                }
            ]
        },
        {
            "name": "Lenovo D24-20",
            "imageUrl": "https://rukminim1.flixcart.com/image/416/416/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70",
            "description": "The Lenovo 60.45 cm (23.8) Full HD VA Panel (D24-20) monitor is equipped with AMD FreeSync technology which eliminates gaming roadblocks, such as motion blur and input lags, to facilitate an amazing gaming experience. The three-side, near-edgeless design of this monitor ensures seamless visuals without the inconvenience of a bezel limiting the screen. Furthermore, its Low Blue Light mode helps prevent your eyes from getting strained while you stream content for long hours.",
            "category": "appliance",
            "quantity": 1,
            "price": 42000,
            "rating": [
                {
                    "rate": 4.5,
                    "count": 400
                }
            ]
        },
        {
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
        },
        {
            "name": "HP Pavilion",
            "imageUrl": "https://rukminim1.flixcart.com/image/416/416/krjjde80/computer/b/q/h/na-gaming-laptop-hp-original-imag5bg5uwgmhmqj.jpeg?q=70",
            "description": "HP Pavilion Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX GTX 1650) 15-DK2095TX Gaming Laptop  (15.6 Inch, Shadow Black & Ultra Violet, 2.23 Kg, With MS Office)",
            "category": "electronic",
            "quantity": 1,
            "price": 67000,
            "rating": [
                {
                    "rate": 4.3,
                    "count": 24
                }
            ]
        },
        {
            "name": "Smartees",
            "imageUrl": "https://rukminim1.flixcart.com/image/416/416/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70",
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "fashion",
            "quantity": 1,
            "price": 179,
            "rating": [
                {
                    "rate": 4,
                    "count": 12631
                }
            ]
        },
        {
            "name": "SurpriseForU Chocolate Gift",
            "imageUrl": "https://rukminim1.flixcart.com/image/416/416/l0lbrm80/shopsy-festive-gift-box/1/r/f/7-dairy-milk-and-dark-fantasy-gift-hamperholi-chocolate-gift-original-imagccmuhgs3zmcn.jpeg?q=70",
            "description": "SurpriseForU Chocolate Gift | Dairy Milk And Dark Fantasy Gift Hamper Combo  (1 Metal Cart , 1 Dark Fantasy , 10 Dairy Milk) SurpriseForU Chocolate Gift | Dairy Milk And Dark Fantasy Gift Hamper Combo  (1 Metal Cart , 1 Dark Fantasy , 10 Dairy Milk) SurpriseForU Chocolate Gift | Dairy Milk And Dark Fantasy Gift Hamper Combo  (1 Metal Cart , 1 Dark Fantasy , 10 Dairy Milk)",
            "category": "grocery",
            "quantity": 1,
            "price": 499,
            "rating": [
                {
                    "rate": 4.3,
                    "count": 120
                }
            ]
        }
    ]
)