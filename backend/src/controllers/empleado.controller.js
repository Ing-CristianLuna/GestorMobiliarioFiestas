const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getEmpleados = async (req, res) => {
    try {
        const empleados = await prisma.empleado.findMany();
        res.json(empleados);
    } catch (error) {
        res.status(404).json({ messsage: "error al cargar" })
    }
}

exports.createEmpleado = async (req, res) => {
    try {
        const { nombre, apellido_p, apellido_m, edad, puesto, direccion, id_local } = req.body;
        const nuevoEmpleado = await prisma.empleado.create({
            data: { nombre, apellido_p, apellido_m, edad, puesto, direccion, local: { connect: { id: id_local } } },
            include: { local: true }
        })
        res.json(nuevoEmpleado);
    } catch (error) {
        console.log(error);
        res.status(404).json({ messsage: "error al crear" })
    }
}

exports.deleteEmpleado = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await prisma.empleado.delete({ where: { id } });
        res.status(200).json({ message: "eliminado con exito" });
    } catch (error) {
        res.status(404).json({ message: "error al eliminar" });
    }
}

exports.updateEmpleado = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const datos = req.body;
        await prisma.empleado.update({ where: { id }, data: datos });
        res.status(200).json({ message: "acrualizado con exito" });
    } catch (error) {
        res.status(404).json({ message: "error al actualizar" });
    }
}