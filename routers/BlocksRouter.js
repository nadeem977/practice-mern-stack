const express = require('express');
const {CreateTextblock,CreateListblock,CreateResponseblick,removingBlocks} = require("../controllers/Blocks")

const router = express.Router();


router.post("/textblock",CreateTextblock)
router.post("/listblock",CreateListblock)
router.post("/resblock",CreateResponseblick)
router.post("/RemovingBlocks",removingBlocks)


module.exports = router;