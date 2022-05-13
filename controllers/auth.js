const httpStatusCode = require('http-status-codes');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const signup = async (req, res) => {
    try {
        const email = req.body.email;

        const jwtBearerToken = jwt.sign(email, process.env.TOKEN);
        
        return res.status(httpStatusCode.OK).send({
                status: true,
                type: 'success',
                data: jwtBearerToken
        });
    } catch (error) {
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
            status: false,
            type: 'error',
            message: 'Error while getting token.',
            data: error
        });
    }
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN, (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}


module.exports = {
    signup,
    authenticateToken
}