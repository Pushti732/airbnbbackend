const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({

    housetypecategory: {
        type: String,
        require: true
    },
    housetypeimage: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Category", CategorySchema);