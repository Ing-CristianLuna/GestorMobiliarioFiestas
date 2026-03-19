
export function TablaEmpleado({ empleados, mandaEmpleado, abreModal }) {
    return (
        <main className="card card-body mt-3">
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
                    {empleados.map(empleado => (
                        <tr key={empleado.id}>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.apellido_p}</td>
                            <td>{empleado.apellido_m}</td>
                            <td>{empleado.edad}</td>
                            <td>{empleado.puesto}</td>
                            <td>{empleado.direccion}</td>
                            <td>{empleado.id_local}</td>
                            <td><button className="btn btn-success" onClick={() => { mandaEmpleado(empleado); abreModal() }}>Acciones</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}