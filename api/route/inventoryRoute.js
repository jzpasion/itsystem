var express = require('express');
var inventoryHandler= require("../handler/inventoryHandler");
var router = express.Router();
var bodyparser = require('body-parser')
router.use(bodyparser.urlencoded({extended:false}));


router.post('/addInventory' , inventoryHandler.addInventory);

module.exports = router;

