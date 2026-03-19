
export function TablaCliente({ clientes, clienteDetalles, activarModal }) {
    return (
        <main className="card card-body mt-3">
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
                    {clientes.map(cliente => (
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
        </main>
    )
}