const jwt = require("jsonwebtoken");

//Middleware autenticacion
exports.auth = (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "token invalido" });
    }

    try {
        const decoded = jwt.verify(token, "secreto_super_seguro");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "token invalido" });
    }
}