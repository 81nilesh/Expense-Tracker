const express = require('express');
const { addAllTransection, getAllTransection } = require('../controllers/transectionCtrl');


// router objecct
const router = express.Router()

// routes
// add transection Post Method
router.post("/add-transection", addAllTransection);

// get transection
router.get("/get-transection", getAllTransection);


module.exports = router;