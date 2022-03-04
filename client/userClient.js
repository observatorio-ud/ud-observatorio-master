const axios = require('axios')

const { userUrl } = require('../config')
const logger = require('../utils/logger')

const userClient = module.exports
const log = logger.getLogger('userClient')

userClient.getUsers = async (email) => {
    log.info(`getUsers email=${email} `)     
    const { data } = await axios.get(`${userUrl}/user`, { params: { email } })
    return(data)
  }

  userClient.getAllUsers = async (params) => {
    log.info(`getAllUsers params=${params} `)     
    const { data } = await axios.get(`${userUrl}/user`, { params:params })
    return(data)
  }

userClient.addUsers = async (user) => {
    log.info(`addUsers user=${JSON.stringify(user)} `)     
    const { data } = await axios.post(`${userUrl}/user`, user)
    return(data)
  }

  userClient.updateUsers = async (id, body) => {
    log.info(`updateUsers id=${id} body=${JSON.stringify(body)} `)     
    const { data } = await axios.put(`${userUrl}/user`, body, { params: { id } })
    return(data)
  }

  userClient.deleteUsers = async (id) => {
    log.info(`deleteUsers id=${id} `)     
    const { data } = await axios.delete(`${userUrl}/user`, { params: { id } })
    return(data)
  }

  userClient.getUsersContar = async (params) => {
    log.info(`getUsersContar params=${params} `)     
    const { data } = await axios.get(`${userUrl}/user/contar`, { params:params })
    return(data)
  }