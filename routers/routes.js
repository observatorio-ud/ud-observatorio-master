const express = require('express')
const passport = require('passport')

const { OK } = require('http-status-codes')

const wrap = require('../wrap.js')
const { routers } = require('../constants')
const auth = require('../auth/validateToken')
const { apiController,userController} = require('../controllers')

const router = express.Router()

router.get(routers.CALLBACK, passport.authenticate('google', { scope: ['email', 'profile'] }), wrap(apiController.callback))

router.get(routers.GOOGLE, passport.authenticate('google', { scope: ['email', 'profile'] }), (req, res) => { });

router.get(routers.USER, wrap(userController.listUsers))

router.post(routers.USER, wrap(userController.addUsers))

router.put(routers.USER, wrap(userController.updateUsers))

router.delete(routers.USER, wrap(userController.deleteUsers))

router.get(routers.USERS_CONTAR, wrap(userController.listUsersContar))

router.get(routers.HEALTH, wrap(async (req, res) => {
  res.status(OK).json({ message: 'OK' })
}))

module.exports = router