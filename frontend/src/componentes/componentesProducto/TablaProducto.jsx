
export function TablaProducto({ productos, mandaProducto, activaModal }) {
    return (
        <main className="card card-body mt-3">
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
                    {productos.map(producto => (
                        <tr key={producto.id}>
                            <td>{producto.producto}</td>
                            <td>{producto.descripcion}</td>
                            <td className="text-center">{producto.precio_unitario}</td>
                            <td><button className="btn btn-success" onClick={() => { mandaProducto(producto); activaModal(true); }}>Acciones</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}