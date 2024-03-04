const express = require('express');
const { addAllTransection, getAllTransection, editAllTransection, deleteAllTransection } = require('../controllers/transectionCtrl');


// router objecct
const router = express.Router()

// routes
// add transection Post Method
router.post("/add-transection", addAllTransection);

// Edit transection Post Method
router.post("/edit-transection", editAllTransection);

// Delete transection Post Method
router.post("/delete-transection", deleteAllTransection);



// get transection
router.post("/get-transection", getAllTransection);


module.exports = router;