const jwt = require('jsonwebtoken'); // jwt for verification
// require secrets from module
const secrets = require('../api/secrets')
module.exports = (req, res, next) =>{
    // normally sent as Authorization header
    const token = req.headers.authorization; //<- unspoken industry convention
    const secret = secrets.jwtSecret;

    // verify if token is valid
    if(token){
        jwt.verify(token, secret, (err, decodedToken) =>{
            if(err){
                res.status(401).json({err: 'ACCESS DENIED'})
            } else {
                req.decodedToken = decodedToken; // not required
                next();
            }
        }) // where does decoded token come from?
    } else {
        res.status(400).json({ message: 'Please provide proper identification to proceed.'})
    }
};