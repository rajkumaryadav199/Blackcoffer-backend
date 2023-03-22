const mongoose =  require("mongoose")


const dataSchema = new mongoose.Schema({
   
    end_year: { type: String, required: false },  
    intensity: { type:  Number, required: true },
    sector: { type: String, required: false },
    topic: {type: String, required : false},
    insight: {type: String, required : true},
    url: {type: String, required : true},
    region: {type: String, required : false},
    start_year : {type: String, required : false},
    impact: {type: String, required : false},
    added: {type: String, required : true},
    published: {type: String, required : false},
    country: {type: String, required : false},
    relevance: { type:  Number, required: true },
    pestle: {type: String, required : false},
    source: {type: String, required : true},
    title: {type: String, required : true}, 
    likelihood : { type:  Number, required: true },
}
,
  {
     versionKey: false,
    timestamps: true,
   },
 )

 module.exports = mongoose.model("Data",dataSchema)