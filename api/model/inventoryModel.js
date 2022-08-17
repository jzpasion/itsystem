const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    itemName: {type: String , required: true , unique: true},
    category: {type: String, required: true},
    quantity: {type: Number, require: true}
},{collection : 'inventory' , timestamps: true});

const inventory = mongoose.model('inventory' , inventorySchema);

module.exports = inventory;