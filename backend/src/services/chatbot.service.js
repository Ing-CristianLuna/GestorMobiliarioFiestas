const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

async function obtenerContratosDeHoy(id_local) {
    const inicio = new Date();
    inicio.setHours(0, 0, 0, 0);

    const fin = new Date();
    fin.setHours(23, 59, 59, 999);
    const total = await prisma.contrato.findMany({
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

async function obtenerCantidadTotalInventario(id_local) {
    const res = await prisma.inventario.findMany({
        where: { id_local },
        include: { producto: true }
    });

    const total = res.map(i => ({
        producto: i.producto.producto,
        cantidad: i.cantidad_total
    }));
    console.log(total);
    return total;
}

module.exports = { obtenerContratosDeHoy, obtenerCantidadTotalInventario };

