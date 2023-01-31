const mongoose= require('mongoose');
const CategoriesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    }


});
module.exports =mongoose.model('Categories',CategoriesSchema,'Categories');