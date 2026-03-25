const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getLocalesRegister = async (req, res) => {
    try {
        const resultados = await prisma.local.findMany()
        res.json(resultados);
    } catch (error) {
        res.status(500).json({ message: "error al traer locales" });
    }
}