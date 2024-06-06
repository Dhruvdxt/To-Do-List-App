const ToDo = require('../Models/ToDo');

async function handleAddToDo(req, res){
    const body = req.body;
    try{
        const newToDo = await new ToDo({userId: body.userId, title: body.title, desc: body.desc, showDesc: false});
        await newToDo.save();
    }
    catch(err){
        throw err;
    }
    return res.status(201).json({msg: "New ToDo is added successfully."});
}
async function handleGetToDoByUserId(req, res){
    const allToDo = await ToDo.find({userId: req.body.userId});
    return res.json(allToDo);
}
async function handleUpdateToDoById(req, res){
    const {ToDoId, title, desc} = req.body;
    await ToDo.updateOne(
        {_id: ToDoId}, 
        { $set: {title: title, desc: desc}}
    );
    return res.json({status: "ToDo is updated successfully."});
}
async function handleDeleteToDoById(req, res){
    await ToDo.findByIdAndDelete(req.body.ToDoId);
    return res.json({status: "ToDo is deleted successfully."});
}

module.exports = {
    handleAddToDo,
    handleGetToDoByUserId,
    handleUpdateToDoById,
    handleDeleteToDoById
}