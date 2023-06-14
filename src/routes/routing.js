const express = require('express');
const router = express.Router();
const setupdb = require('../model/setupdb');
const InfyAirlinesServ = require('../services/users');

router.get('/',(req,res)=>{
    res.send("Routers connected")
})

router.get('/setupdb', async (req, res, next) => {
    try {
        let response = await setupdb();
        res.json(response)
    } catch (err) {
        // next(err);
        console.log("error roiting")
    }
})



router.post('/checkdata1', async (req, res, next) => {
    try {
        console.log(req.body)
        let arr = req.body;
        let data = await InfyAirlinesServ.updateBooking(arr);
        res.json(data)
       
    } catch (err) {
        next(err);
    }
})


module.exports = router;