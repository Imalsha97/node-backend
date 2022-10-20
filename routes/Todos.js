const router = require("express").Router();
let Todo = require("../models/Todo");

router.route("/add").post(async(req,res) => {
    const {tTitle,tStatus} = req.body;

    const newTodo = new Todo({
        tTitle,tStatus
    })
    await newTodo.save().then(() => {
        res.json("Todo Added")
    }).catch((err) => {
        console.log(err);
    })

});
 router.route("/").get(async(req,res) => {
    await Todo.find().then((todos) => {
        res.json(todos)
    }).catch((err)=> {
        console.log(err)
    })
 });

 router.route("/update/:id").put(async(req,res) => {
    let todoId = req.params.id;
    const {tTitle,tStatus} = req.body;

    const todoUpdate = {
        tTitle,tStatus
    }
    const update = await Todo.findByIdAndUpdate(todoId,todoUpdate)
    .then(() =>{
        res.status(200).send({status:"Todo updated"});
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating",error:err.message});
    })
 });

 router.route("/delete/:id").delete(async(req,res) => {
    let todoId = req.params.id;
    await Todo.findByIdAndDelete(todoId)
    .then(() => {
        res.status(200).send({status:"todo Deleted Success!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "todo not Deleted",error : err.message});
    })
 });

 router.route("/get/:id").get(async(req,res) => {
    let todoId = req.params.id;

    const Ttodo = await Todo.findById(todoId)
    .then((todo)=> {
        res.status(200).send({status:"TODO Fetched Successfully",todo});
    }).catch((err) => {
        res.status(500).send({status:"Can't fetch",error:err.message});
    })
 });

module.exports = router;