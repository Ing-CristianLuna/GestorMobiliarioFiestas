import { useState } from "react";
import { Pagina } from "../../utils/Paginacion";
import { Paginador } from "../Paginador";

export function TablaProducto({ productos, mandaProducto, activaModal }) {
    const [paginaActual, setPaginaActual] = useState(1);
    const { datosAMostrar, numeroPaginas } = Pagina(productos, paginaActual);

    return (
        <main className="card card-body mt-3 position-relative" style={{ minHeight: "500px" }}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Descripcion</th>
                        <th className="text-center">Precio Unitario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datosAMostrar.map(producto => (
                        <tr key={producto.id}>
                            <td>{producto.producto}</td>
                            <td>{producto.descripcion}</td>
                            <td className="text-center">{producto.precio_unitario}</td>
                            <td><button className="btn btn-success" onClick={() => { mandaProducto(producto); activaModal(true); }}>Acciones</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                < Paginador numeroPaginas={numeroPaginas} paginaActual={paginaActual} setPaginaActual={setPaginaActual} />
            </div>
        </main>
    )
}