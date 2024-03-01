const mongoose = require("mongoose");


const listblockschema = mongoose.Schema({

    name:{
        type:String,
        default:"new list",
    },
    type:{
        type:String,
        default:"LIST",
    },
    lset_response:{
        type:String,
        default:"List Block Item"
    },
    API_colled:{
    type:Boolean,
    default:false
    },
    temperature:{
        type:String,
        default:null
    },
    max_length:{
        type:String,
        default:null
    },
    frequency_penalty:{
        type:String,
        default:null
    },
    presence_penalty:{
        type:String,
        default:null
    },
    top_p:{
        type:String,
        default:null
    },
    Prompt:{
      type:String,
      default:null
    },

},{timestamps:true})


const List = mongoose.model("LIST",listblockschema)

module.exports = List ;