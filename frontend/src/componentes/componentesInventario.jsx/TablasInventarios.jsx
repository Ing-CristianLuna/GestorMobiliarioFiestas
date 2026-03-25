import { useState } from "react";
import { Pagina } from "../../utils/Paginacion";
import { Paginador } from "../Paginador";

export function TablaInventarios({ inventarios, mandaInventario, muestraModal }) {
    const [paginaActual, setPaginaActual] = useState(1);
    const { datosAMostrar, numeroPaginas } = Pagina(inventarios, paginaActual);

    return (
        <main className="card card-body mt-3 position-relative" style={{ minHeight: "500px" }}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Producto</th>
                        <th>Cantidad Total</th>
                        <th>Cantidad Ocupada</th>
                        <th>Cantidad Disponible</th>
                        <th>Local</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datosAMostrar.map(inventario => (
                        <tr key={inventario.id}>
                            <td>{inventario.producto.producto}</td>
                            <td>{inventario.cantidad_total}</td>
                            <td>{inventario.cantidad_ocupada}</td>
                            <td>{inventario.cantidad_disponible}</td>
                            <td>{inventario.id_local}-{inventario.local.nombre}</td>
                            <td><button className="btn btn-success" onClick={() => { mandaInventario(inventario); muestraModal(true); }} >Acciones</button></td>
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