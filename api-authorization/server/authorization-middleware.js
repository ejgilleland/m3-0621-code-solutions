const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {
  const tokenHeader = req.headers['x-access-token'];
  if (!tokenHeader) {
    next(new ClientError(401, 'authentication required'));
  } else {
    req.user = jwt.verify(tokenHeader, process.env.TOKEN_SECRET);
    next();
  }
  /**
    * References:
    * https://nodejs.org/api/http.html#http_message_headers
    * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
    */
}

module.exports = authorizationMiddleware;
