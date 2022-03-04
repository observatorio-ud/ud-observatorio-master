const { CREATED, BAD_REQUEST } = require('http-status-codes')

const { userClient } = require('../client')
const logger = require('../utils/logger')
const log = logger.getLogger('apiController')

const apiController = module.exports

apiController.callback = async (req, res) => {
    const { user: { emails, displayName, token, image } } = req
    log.info(token)
    const email = emails[0].value
    const user = await userClient.getUsers(email)
    if (user.length) {
        return res.redirect(`https://observatorio.planestic.udistrital.edu.co/login?token=${token}&name=${displayName}&url_image=${image}&rol=${user[0].rol}&email=${user[0].email}`)
       // return res.redirect(`http://192.168.0.6:8080/login?token=${token}&name=${displayName}&url_image=${image}&rol=${user[0].rol}&email=${user[0].email}`)
    } else {
        const newUser = await userClient.addUsers({
            name: displayName,
            email: email,
            rol: "ESTUDIANTE",
            img: image
        })
        log.info(newUser)
        const user = await userClient.getUsers(email)
        log.info(`el nuevo user ${user} -------------------------`)
        if (user.length) {
            return res.redirect(`https://observatorio.planestic.udistrital.edu.co/login?token=${token}&name=${displayName}&url_image=${image}&rol=${user[0].rol}&email=${user[0].email}`)
            //return res.redirect(`http://192.168.0.6:8080/login?token=${token}&name=${displayName}&url_image=${image}&rol=${user[0].rol}&email=${user[0].email}`)
        } else {
            return res.status(BAD_REQUEST).json({ error: 'user error' })
        }
    }

}
