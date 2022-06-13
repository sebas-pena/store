const socketIOMiddleware = function (req, res, next) {
    req.io = io;
    next();
}

module.exports = socketIOMiddleware;