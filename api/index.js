const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('./models/User');
const connectDb = require('./db');
const Product = require('./models/Product');
const app = express();

const jwtSecret = 'asdfghjkl';
const bycryptSalt = bycrypt.genSaltSync(10);

connectDb();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
        credentials: true,
        origin: "http://localhost:3000"
    }
));

app.get('/test', (req, res) => {
    res.json('ok');
})

app.get('/profile', (req, res) => {
    const token = req.cookies?.token;
    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, userData) => {
            if (err) throw err;
            res.json(userData);
        });
    } else {
        res.status(401).json('no token');
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await UserModel.findOne({ username })
    if (foundUser) {
        const passOk = bycrypt.compareSync(password, foundUser.password)
        if (passOk) {
            jwt.sign({ userId: foundUser._id, username }, jwtSecret, {}, (err, token) => {
                res.cookie('token', token, { sameSite: 'none', secure: true }).json({
                    id: foundUser._id,
                })
            })
        }
    } else {
        res.json('no match')
    }
})

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = bycrypt.hashSync(password, bycryptSalt)
        const createUser = await UserModel.create({
            username: username,
            password: hashedPassword
        });
        jwt.sign({ userId: createUser._id, username }, jwtSecret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, { sameSite: 'none', secure: true }).status(201).json({
                id: createUser._id
            })
        })
    }
    catch (err) {
        if (err) throw err;
    }
})

app.post('/logout', (req, res) => {
    res.cookie('token', '', { sameSite: 'none', secure: true }).json('ok')
})


//Product

app.get('/products', async (req,res) => {
    try {
        const product = await Product.find()
        res.json(product)
    }
    catch(error) {
        res.status(500).send(error.message)
    }
})

app.get('/product/:id', async (req,res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product) throw new Error('Product not found')
        res.json(product)
    }
    catch(error) {
        res.status(500).send(error.message)
    }
})

app.get('/product/cat/:category', async (req,res) => {
    try {
        const product = await Product.find({category: req.params.category})
        if(!product) throw new Error('Product not found')
        res.json(product)
    }
    catch(error) {
        res.status(500).send(error.message)
    }
})


app.post('/products', async (req,res) => {
    try {
        const {name, imageUrl, description, category, quantity, price, rating:[{rate, count}]} = req.body;
        const product = new Product({name, imageUrl, description, category, quantity, price, rating:[{rate, count}]});
        await product.save();
        res.json({success: true});
    }
    catch(error) {
        res.status(500).send(error.message)
    }
})


app.listen(4000, () => {
    console.log('server listening on port 4000')
})