const { 
    PORT,
    CLIENT_ID,
    SECRET,
    CALLBACK_URL,
    USER_URL,
    GOOGLE_URL_TOKEN,
    ACL
} = process.env

module.exports={
    port: PORT,
    clientId: CLIENT_ID,
    secret: SECRET,
    callback: CALLBACK_URL,
    userUrl: USER_URL,
    googleUrlToken: GOOGLE_URL_TOKEN,
    acl: ACL
}