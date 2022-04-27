

const mongoose = require('mongoose')
const { Schema } = require('mongoose');

const shoppingListSchema = new Schema({
    item : { type : String },
    unit : { type : Number },
    price : { type : Number }
})

const MONGO_URL = "mongodb+srv://admin:admin123@clustersmartapp.87act.mongodb.net/Database?retryWrites=true&w=majority"
mongoose.connect(MONGO_URL)

const ShoppingList = mongoose.model( 'ShoppingList', shoppingListSchema)

//module.exports = ShoppingList

