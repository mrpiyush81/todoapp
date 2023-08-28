const express=require("express");
const router =express.Router();

const {createTodo}= require("../controller/createTodo")
const {getTodo,getTodobyID}= require("../controller/getTodos")
const {updateTodo}= require("../controller/updatetodo")
const {deleteTodo}= require("../controller/deletetodo")


router.post('/createTodo',createTodo);
router.get('/getTodos',getTodo);
router.get('/getTodos/:id',getTodobyID);
router.put('/updatetodo/:id',updateTodo);
router.delete('/deletetodo/:id',deleteTodo);

module.exports=router;