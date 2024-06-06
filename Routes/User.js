const router = require('express').Router();
const {handleGetAllUsers, handleCreateNewUser, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleLoginUserByEmailAndPass} = require('../Controllers/User');

router
.route('/registration')
.get(handleGetAllUsers)
.post(handleCreateNewUser);

router
.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);

router
.route('/login')
.post(handleLoginUserByEmailAndPass);

module.exports = router;