const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//obtener
exports.getProductosPrisma = async (req, res) => {
    try {
        const productos = await prisma.producto.findMany();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: "error al obtener productos" });
    }
}

//crear
exports.createProductoPrisma = async (req, res) => {
    try {
        console.log(req.body);
        const { descripcion, precio_unitario, producto } = req.body;
        await prisma.producto.create({ data: { descripcion, precio_unitario, producto } });
        res.json({ message: "creado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "eliminado correctaente" });
    }
}

//eliminar
exports.deleteProductoPrisma = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await prisma.producto.delete({ where: { id } });
        res.json({ message: "eliminado correctaente" });
    } catch (error) {
        res.status(500).json({ message: "eliminado correctaente" });
    }
}

exports.updateProductoPrisma = async (req, res) => {
    try {
        const datos = req.body;
        const id = Number(req.params.id);
        await prisma.producto.update({
            data: datos, where: { id }
        })
        res.json({ message: "Actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar" });
    }
}