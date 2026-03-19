
export function TablaInventarios({ inventarios, mandaInventario, muestraModal }) {
    return (
        <main className="card card-body mt-3">
            <table className="table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad Total</th>
                        <th>Cantidad Ocupada</th>
                        <th>Cantidad Disponible</th>
                        <th>Local</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {inventarios.map(inventario => (
                        <tr key={inventario.id}>
                            <td>{inventario.producto.producto}</td>
                            <td>{inventario.cantidad_total}</td>
                            <td>{inventario.cantidad_ocupada}</td>
                            <td>{inventario.cantidad_disponible}</td>
                            <td>{inventario.id_local}</td>
                            <td><button className="btn btn-success" onClick={() => { mandaInventario(inventario); muestraModal(true); }} >Acciones</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}