const express = require('express')
const router = express.Router()

const MyPicsController = require('./controllers/MyPicsController.js')
const controll = new MyPicsController()

router.get('/mypics/', controll.index);
router.get(`mypics/:id`, controll.show);

module.exports = router