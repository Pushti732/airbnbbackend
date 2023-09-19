const Category = require("../model/categorymodel");

const getAllCategory = (req,res)=>{
    Category.find().then(function(err,category){
        if(err){
            res.send(err);
        }
    })
}



const insertCategory = (req, res) => {

    const category = new Category({
        housetypecategory: req.body.housetypecategory,
        housetypeimage: req.body.housetypeimage,
    })

    category.save().then(function(err) {
        if (!err) {
          res.send("Successfully Added to th DataBase.");
        } else {
          res.send(err);
        }
      });
}


// insert new data elemen to the database 



module.exports = {
    getAllCategory,
    insertCategory
}