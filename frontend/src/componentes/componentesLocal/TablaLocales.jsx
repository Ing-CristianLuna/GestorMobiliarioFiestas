import { useState } from "react";
import { Pagina } from "../../utils/Paginacion";
import { Paginador } from "../Paginador";

export function TablaLocales({ locales, idDetalles, activaModal }) {
    const [paginaActual, setPaginaActual] = useState(1);
    const { datosAMostrar, numeroPaginas } = Pagina(locales, paginaActual);

    return (
        <main className='card card-body position-relative' style={{ minHeight: "500px" }}>
            <table className="table">
                <thead >
                    <tr>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {datosAMostrar.map(local => (
                        <tr key={local.id}>
                            <td>{local.nombre}</td>
                            <td>{local.direccion}</td>
                            <td>{local.telefono}</td>
                            <td><button className="btn btn-success" onClick={() => { idDetalles(local); activaModal(true); }}>Ver</button></td>
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