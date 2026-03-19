const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getMensajes = async (req, res) => {
    try {
        console.log("adentro del getmensajes");
        const id = req.user.id;
        console.log(id);
        const mensajes = await prisma.mensajeChatBot.findMany({
            where: { id_user: id },
            orderBy: { fecha_y_hora: "asc" }
        });
        res.json(mensajes);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "error al encontrar mensajes" });
    }
}

exports.createMensaje = async (req, res) => {
    try {
        console.log("adentro del createmensajes");
        const id_user = req.user.id;
        const { contenido, rol, fecha_y_hora } = req.body;
        await prisma.mensajeChatBot.create({
            data: { contenido, rol, fecha_y_hora, user: { connect: { id: id_user } } }
        })
        res.json({ message: "mensaje creado" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error al crear" });
    }
}