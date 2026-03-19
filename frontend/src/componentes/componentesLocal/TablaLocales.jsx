
export function TablaLocales({ locales, idDetalles, activaModal }) {


    return (
        <main className='card card-body'>
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
                    {locales.map(local => (
                        <tr key={local.id}>
                            <td>{local.nombre}</td>
                            <td>{local.direccion}</td>
                            <td>{local.telefono}</td>
                            <td><button className="btn btn-success" onClick={() => { idDetalles(local); activaModal(true); }}>Ver</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}