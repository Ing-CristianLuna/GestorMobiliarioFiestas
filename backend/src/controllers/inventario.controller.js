const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//obtener
exports.getInventariosPrisma = async (req, res) => {
    try {
        const resultados = await prisma.inventario.findMany({
            include: { producto: true, local: true }
        })
        res.json(resultados);
    } catch (error) {
        res.status(500).json({ message: "Error al encontrar datos" });
    }
}

//crear
exports.createInventarioPrisma = async (req, res) => {
    try {
        const { id_producto, cantidad_total, cantidad_disponible, cantidad_ocupada, id_local } = req.body;
        await prisma.inventario.create({
            data: { producto: { connect: { id: id_producto } }, cantidad_total, cantidad_disponible, cantidad_ocupada, local: { connect: { id: id_local } } },
            include: { producto: true, local: true }
        });
        res.json({ message: "creado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro al crear" })
    }
}

//eliminar
exports.deleteInventarioPrisma = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await prisma.inventario.delete({ where: { id } });
        res.json({ message: "eliminado correctamente" });
    } catch (error) {
        res.json({ message: "error al eliminar" });
    }
}

//actualizar
exports.updateInventarioPrisma = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const datos = req.body;
        await prisma.inventario.update({
            data: datos,
            where: { id }
        })
        res.json({ message: "actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "error al actualizar" });
    }
} 