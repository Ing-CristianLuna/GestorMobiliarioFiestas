const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//obtener
exports.getDetallesContrato = async (req, res) => {
    try {
        const id_contrato = Number(req.params.id);
        const resultados = await prisma.contrato_Producto.findMany({
            where: { id_contrato: id_contrato },
            include: { producto: true }
        });
        res.json(resultados);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al encontrar datos" })
    }
}

//crear
exports.createDetallesContrato = async (req, res) => {
    try {
        const { id_contrato, id_producto, cantidad, precio_unitario } = req.body;
        await prisma.contrato_Producto.create({
            data: { contrato: { connect: { id: id_contrato } }, producto: { connect: { id: id_producto } }, cantidad, precio_unitario },
            include: { contrato: true, producto: true }
        })
        res.json({ message: "creado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error al crear" });
    }
}

exports.deleteDetallesContrato = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await prisma.contrato_Producto.delete({ where: { id } });
        res.json({ message: "eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "eliminado correctamente" });
    }
}

exports.updateDetalleContrato = async (req, res) => {
    try {
        const datos = req.body;
        const id = Number(req.params.id);
        await prisma.contrato_Producto.update({
            data: datos,
            where: { id }
        })
        res.json({ message: "actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "error al actualizar" });
    }
}