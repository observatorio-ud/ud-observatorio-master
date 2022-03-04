const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { userClient } = require('../client')
const logger = require('../utils/logger')
const log = logger.getLogger('userController')

const userController = module.exports

userController.listUsers = async (req, res) => {
    const { query } = req
    const user = await userClient.getAllUsers(query)
    res.json(user)
}

userController.addUsers = async (req, res) => {
    const { body } = req
    const user = await userClient.addUsers(body)
    res.json(user)
}

userController.updateUsers = async (req, res) => {
    const { body, query: { id } } = req
    const user = await userClient.updateUsers(id, body)
    res.json(user)
}

userController.deleteUsers = async (req, res) => {
    const { query: { id } } = req
    const user = await userClient.deleteUsers(id)
    res.json(user)
}

userController.listUsersContar = async (req, res) => {
    const { query } = req
    const user = await userClient.getUsersContar(query)
    res.json(user)
}