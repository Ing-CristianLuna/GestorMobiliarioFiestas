const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//ontener todos
exports.getLocales = async (req, res) => {
    const locales = await prisma.local.findMany();
    res.json(locales)
}

//crear local
exports.createLocal = async (req, res) => {
    const { nombre, direccion, telefono } = req.body; //Asi recibe los datos del body del request
    const nuevoLocal = await prisma.local.create({
        data: { nombre, direccion, telefono }
    });
    res.json(nuevoLocal);
}

//eliminar local
exports.deleteLocal = async (req, res) => {
    const id = Number(req.params.id);
    await prisma.local.delete({ where: { id } });
    res.status(204).send();
}

//actualizar
exports.updateLocal = async (req, res) => {
    try {
        const datos = req.body;
        const id = Number(req.params.id);
        await prisma.local.update({ where: { id }, data: datos });
        res.status(200).json({ message: "Actualizado" });
    }
    catch (error) {
        res.status(404).json({ message: "Error al actualizar" });;
    }
}