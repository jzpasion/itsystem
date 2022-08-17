var mongoose = require('mongoose');
const urlconnect = "mongodb+srv://itsystem:sdt2022@itsystemdb.3obbfie.mongodb.net/it_system_db?retryWrites=true&w=majority";

const connect = async function(){
    try{
       await mongoose.connect(urlconnect);
       console.log("Connected!");
    }catch(err){
        console.log(err);
    }
}
module.exports = connect;