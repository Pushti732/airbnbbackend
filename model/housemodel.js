const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({

    housecategory: {
        type: String,
        require: true
    },
    houseimage:{
        type: Array,
        require: true
    },
    cityname:{
        type: String,
        require: true
    },
    availabledate:{
        type: String,
        require: true
    },
    hosttype:{
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    islike:{
        type: Boolean,
        require: true
    },
    rating:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Houses",HouseSchema);