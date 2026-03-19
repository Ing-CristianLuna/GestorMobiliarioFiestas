const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient;

//obtener
exports.getClientesPrisma = async (req, res) => {
    try {
        const clientes = await prisma.cliente.findMany();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: "Error al obter datos" });
    }
}

//crear
exports.createClientePrisma = async (req, res) => {
    try {
        const { nombre, apellido_p, apellido_m, direccion_cliente, telefono } = req.body;
        await prisma.cliente.create({ data: { nombre, apellido_p, apellido_m, direccion_cliente, telefono } });
        res.json({ message: "Creado con exito" });
    } catch (error) {
        res.status(500).json({ message: "Error al crear" });
    }
}

//eliminar
exports.deleteClientePrisma = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await prisma.cliente.delete({ where: { id } });
        res.json({ message: "Eliminado con exito" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar" });
    }
}

//actualiza
exports.updateClientePrisma = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const datos = req.body;
        await prisma.cliente.update({
            where: { id }, data: datos
        })
        res.json({ message: "Actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar" });
    }
}