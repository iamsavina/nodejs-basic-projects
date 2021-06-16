const express = require("express")
const router = express.Router()

const { showToDo, createDo, editDo, deleteDo } = require("../controllers/controller")

router.get('/',(req,res)=>{
    res.end("Welcome to the TODO app")
})

router.get('/todo', showToDo)

router.post('/todo',createDo)

router.put('/todo/:id', editDo)

router.delete('/todo/:id', deleteDo)


module.exports = router