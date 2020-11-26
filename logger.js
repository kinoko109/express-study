module.exports = (req, res, next) => {
    const ip = req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    (req.socket && req.socket.remoteAddress) ||
    (req.connection.socket && req.connection.socket.remoteAddress) ||
    "0.0.0.0";

    const date = (new Date()).toISOString();
    const method = req.method;
    const url = req.url;
    const ua = req.headers["user-agent"];

    console.log(`${ip} [${date}] "${method} ${url}" - ${ua}`);

    next();
}
