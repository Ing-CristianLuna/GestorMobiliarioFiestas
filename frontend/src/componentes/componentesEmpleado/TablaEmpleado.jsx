import { useState } from "react";
import { Pagina } from "../../utils/Paginacion";
import { Paginador } from "../Paginador";

export function TablaEmpleado({ empleados, mandaEmpleado, abreModal }) {
    const [paginaActual, setPaginaActual] = useState(1);
    const { datosAMostrar, numeroPaginas } = Pagina(empleados, paginaActual);

    return (
        <main className="card card-body mt-3 position-relative" style={{ minHeight: "500px" }}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido P.</th>
                        <th>Apellido M.</th>
                        <th>Edad</th>
                        <th>Puesto</th>
                        <th>Direccion</th>
                        <th>Local</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datosAMostrar.map(empleado => (
                        <tr key={empleado.id}>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.apellido_p}</td>
                            <td>{empleado.apellido_m}</td>
                            <td>{empleado.edad}</td>
                            <td>{empleado.puesto}</td>
                            <td>{empleado.direccion}</td>
                            <td>{empleado.id_local}-{empleado.local.nombre}</td>
                            <td><button className="btn btn-success" onClick={() => { mandaEmpleado(empleado); abreModal() }}>Acciones</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                <Paginador paginaActual={paginaActual} setPaginaActual={setPaginaActual} numeroPaginas={numeroPaginas} />
            </div>
        </main>
    )
}