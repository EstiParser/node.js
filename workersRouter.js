const express = require('express');
const workers = require("../Data/workers.json");

const router = express.Router();


//קריאה לקבלת עובד מסוים לפי קוד מזהה.
router.get('/workers/:id', (req, res) => {
    const id = Number(req.params.id);
    const aworker = workers.find(worker => worker.id === id);
    if(aworker!=undefined){
        res.send(aworker);
    }
    else{
        res.send("Sorry,worker dosn't exict!");
    }
 
});
//קריאה לקבלת כל העובדים
router.get('/workers',(req,res)=>{
    res.send(workers);
});



module.exports = router;