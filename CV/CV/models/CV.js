const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CVShema = new Schema({
    First_Name: {
        type: String
    },
    Last_Name:{
        type:String
    },
    Objective:{
        type:String
    },
    Education:{
        type:Array
    },
    Education_Year:{
        type:Array
    },
    Languages:{
        type:Array
    },
    Computer_Knowledge:{
        type:Array
    }
});
mongoose.model("CV", CVShema);