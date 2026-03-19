const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function obtenerContratosDeHoy(id_local) {
    const inicio = new Date();
    inicio.setHours(0, 0, 0, 0);

    const fin = new Date();
    fin.setHours(23, 59, 59, 999);
    const total = prisma.contrato.findMany({
        where: {
            id_local,
            fecha_renta: {
                gte: inicio,
                lte: fin
            }
        }
    });
    return total;
}

