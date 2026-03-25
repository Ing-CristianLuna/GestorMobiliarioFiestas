import { Pagina } from "../../utils/Paginacion";
import { Paginador } from "../Paginador";
import { useState } from "react";

export function TablaCliente({ clientes, clienteDetalles, activarModal }) {
    const [paginaActual, setPaginaActual] = useState(1);
    const { datosAMostrar, numeroPaginas } = Pagina(clientes, paginaActual)

    return (
        <main className="card card-body mt-3 position-relative" style={{ minHeight: "500px" }}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Appellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {datosAMostrar.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido_p}</td>
                            <td>{cliente.apellido_m}</td>
                            <td>{cliente.direccion_cliente}</td>
                            <td>{cliente.telefono}</td>
                            <td><button className="btn btn-success" onClick={() => { clienteDetalles(cliente); activarModal(); }}>Detalles</button></td>
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