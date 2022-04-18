const express = require ('express');
const Word = require ('../model/translate.model');
const router = express.Router();

const redis = require("../configs/redis")

// google translate npm package for translate the word and sentence into perticuler langauge

const translate = require('translate-google')

// we can use any language in params for translate the word into params language.

router.post("/:language", async (req, res) => {
    
    try {
        // here we detect the input word which is required for post request 

        let resp = await translate(req.body, { to: req.params.language })
        console.log(resp);

        //creating data which is translated into params language.

        const word = await Word.create(resp);
        const transWord = await Word.find();
        // storing the data in caching using redis

        redis.set("transWord",JSON.stringify(transWord));
        return res.status(201).send(word);
    } catch (e) {
        return res.status(500).send({ status: "Failed", message: e.message })
    }
});



router.get('/', async (req, res) => {
    try {
          //here get the all data using find methods
        
        const word = await Word.find().lean().exec();
        const transWord = await Word.find();
        const redisData = await redis.get("transWord", JSON.stringify(transWord));

        // here we will get all data which is redis cached format
        return res.status(201).send(redisData);
    } catch (e) {
        return res.status(500).send({ status: "Failed", message: e.message })
    }
});


module.exports = router;