const { getAllCategory, insertCategory } = require('./controller/category');
const { insertHouses, getAllHouse } = require('./controller/houses');

const router = require('express').Router();

router.get("/getAllCategory", getAllCategory);
router.get("/getHouses",getAllHouse);

router.get('/hi', function (req, res){
    res.send("we are planning to build product api");
})

router.post("/addAllCategory", insertCategory);

router.post("/addHouses",insertHouses);

module.exports = router;
