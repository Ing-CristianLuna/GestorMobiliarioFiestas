const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//encontrar
exports.getContratosPrisma = async (req, res) => {
    try {
        const contratos = await prisma.contrato.findMany({ include: { cliente: true, local: true } });
        res.json(contratos);
    } catch (error) {
        res.status(500).json({ message: "Error al encontrar" });
    }
}

//crear
exports.createContratoPrisma = async (req, res) => {
    try {
        const { fecha_renta, fecha_entrega, telefono_referencia, estado, pago_total, direccion_entrega, id_cliente, id_local } = req.body
        await prisma.contrato.create({
            data: { fecha_renta, fecha_entrega, telefono_referencia, estado, pago_total, direccion_entrega, cliente: { connect: { id: id_cliente } }, local: { connect: { id: id_local } } }, include: { local: true, cliente: true }
        });
        res.json({ message: "Creado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al crear" });
    }
}

//eliminar
exports.deleteContratoPrisma = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await prisma.contrato.delete({ where: { id } });
        res.json({ message: "Eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar" });
    }
}

//actualiza
exports.updateContrato = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const datos = req.body;
        console.log("BODY:", req.body);
        console.log("ID:", id);
        console.log("RESULT:", await prisma.contrato.update({
            where: { id },
            data: datos
        }));
        res.status(200).json({ message: "Actualizado correctamente" });
    } catch (error) {
        console.error("error prisma", error);
        res.json({ message: "error al ctualizar" });
    }
}