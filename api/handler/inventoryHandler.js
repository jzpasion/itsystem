const inventorySchema = require('../model/inventoryModel');

const addInventory = async (req ,res ) =>{

    const itemname = req.body.itemname;
    const category = req.body.category;
    const quantity = req.body.quantity;
    try{
        if(itemname && category && quantity){

            const add = await inventorySchema.create({
                itemName: itemname,
                category: category,
                quantity: quantity
            });

            res.status(201).json({status: 'ok' , message: "User added successfully" , data: add});


        }else{
            return res.status(500).json({status: "error" , message: 'Invalid Parameters'});
        }
    }catch(err){
        res.status(409).json({status: "error" , error: err})
    }
}

module.exports = {
    addInventory
}