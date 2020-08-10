var mongoose = require('mongoose');

var quizzSchema = mongoose.Schema({
    question: String,
    repA: String,
    repB: String,
    repC: String,
    repD: String,
    win: String
})

var tourSchema = mongoose.Schema({
    availablelang: [String],
    title: String,
    hours: String,
    duration: String,
    simpleprice: Number,
    groupprice: Number,
    minfordiscount: Number,
    category: String,
    location: {
        longitude: Number,
        latitude: Number
    },
    guide:[{
        type: String,
        urlcouv: String,
        urlPlan: String,
        point: [{
            coordx: Number,
            coordy: Number,
            audio: [{
                lang: String,
                urlaudio: String
            }]
        }]
    }],
    quizz: [quizzSchema]
   });

var tourModel = mongoose.model('tours', tourSchema);

module.exports = tourModel;
