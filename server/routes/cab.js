const express = require('express')
const router = express.Router()

const Cabcontroller = require('../controller/cab')

router.get('/',Cabcontroller.CabList)
router.get('/count',Cabcontroller.CabListCount)
router.post('/cabcreate',Cabcontroller.CreateCab)
router.post('/usercreate',Cabcontroller.CreateUser)
router.put('/book/:cab_id',Cabcontroller.CabBook)
router.put('/unbook/:cab_id',Cabcontroller.CabUnBook)

module.exports = router