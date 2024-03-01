const mongoose = require("mongoose");


const Responselockschema = mongoose.Schema({

    name:{
        type:String,
        default:"new response",
    },
    type:{
        type:String,
        default:"RESPONSE",
    },
    lset_response:{
        type:String,
        default:"To generate a response open prompt settings window."
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


const Response = mongoose.model("Response",Responselockschema)

module.exports = Response ;