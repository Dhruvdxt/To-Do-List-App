const router = require('express').Router();
const {handleAddToDo, handleGetToDoByUserId, handleUpdateToDoById, handleDeleteToDoById} = require('../Controllers/ToDo');

router.post('/Get', handleGetToDoByUserId);

router.post('/Add', handleAddToDo);

router.put('/Update', handleUpdateToDoById);

router.delete('/Delete', handleDeleteToDoById);


module.exports = router;

