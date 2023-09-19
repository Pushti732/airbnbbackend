const Houses = require("../model/housemodel");

const getAllHouse = (req,res)=>{
    Houses.find().then(function(err,house){
        if(err){
            res.send(err);
        }
    })
}



const insertHouses = (req, res) => {

    const house = new Houses({
        housecategory: req.body.housecategory,
        houseimage: req.body.houseimage,
        cityname: req.body.cityname,
        availabledate: req.body.availabledate,
        hosttype: req.body.hosttype,
        price: req.body.price,
        islike: req.body.islike,
        rating: req.body.rating
    })

    house.save().then(function(err) {
        if (!err) {
          res.send("Successfully Added to th DataBase.");
        } else {
          res.send(err);
        }
      });
}


// insert new data elemen to the database 



module.exports = {
    getAllHouse,
    insertHouses
}