import { useState } from "react";
import { Pagina } from "../../utils/Paginacion";
import { Paginador } from "../Paginador";

export function TablaDetallesContratos({ detallesContratos, mandaDetalleContrato, muestraModal }) {
    const [paginaActual, setPaginaActual] = useState(1);
    const { datosAMostrar, numeroPaginas } = Pagina(detallesContratos, paginaActual);

    return (
        <main className="card container position-relative" style={{ minHeight: "500px" }}>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Contrato</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio por Unidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datosAMostrar.map(detContrato => (
                        <tr key={detContrato.id}>
                            <td>{detContrato.id_contrato}</td>
                            <td>{detContrato.producto.producto}</td>
                            <td>{detContrato.cantidad}</td>
                            <td>{detContrato.precio_unitario}</td>
                            <td><button className="btn btn-success" onClick={() => { mandaDetalleContrato(detContrato); muestraModal(true) }}>Acciones</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                <Paginador numeroPaginas={numeroPaginas} paginaActual={paginaActual} setPaginaActual={setPaginaActual} />
            </div>
        </main>
    )
}