const jwt = require('jsonwebtoken');


// Verify token (https://github.com/auth0/node-jsonwebtoken)

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
    } catch {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }

    
};