
export function TablaDetallesContratos({ detallesContratos, mandaDetalleContrato, muestraModal }) {
    return (
        <main className="card- card container">
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
                    {detallesContratos.map(detContrato => (
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
        </main>
    )
}