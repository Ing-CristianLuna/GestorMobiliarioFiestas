const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
    try {
        const { nombre, correo, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const usuarioCreado = await prisma.user.create({
            data: { nombre, correo, password: hash }
        });
        const token = jwt.sign(
            { id: usuarioCreado.id, correo: usuarioCreado.correo },
            "secreto_super_seguro",
            { expiresIn: "8h" }
        );
        res.json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error al crar usuario" });
    }
}

exports.login = async (req, res) => {
    try {
        const { correo, password } = req.body;

        const usuario = await prisma.user.findUnique({ where: { correo } });

        if (!usuario) {
            res.status(401).json({ message: "usuario no encontrado" });
        }

        const valido = await bcrypt.compare(password, usuario.password);

        if (!valido) {
            res.status(401).json({ message: "contrasena incorrecta" });
        }

        const token = jwt.sign(
            { id: usuario.id, correo: usuario.correo, id_local: usuario.id_local },
            "secreto_super_seguro",
            { expiresIn: "8h" }
        );
        res.json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error en el login" });
    }
}

