import { useNavigate } from "react-router-dom";

export function TablaContratos({ contratos, contratoDetalles, abrirModal }) {

    const navigate = useNavigate();

    function formatoFechaHTML(fecha) {
        const fechaFormatoHora = new Date(fecha).setHours(new Date(fecha).getHours() - 6);
        const fechaFormateada = new Date(fechaFormatoHora).toISOString().slice(0, 16).replace('T', ' ');
        return fechaFormateada;
    }

    return (
        <main className="card card-body mt-3">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Fecha de Renta</th>
                        <th>Fecha de Entrega</th>
                        <th>Telefono</th>
                        <th>Estado</th>
                        <th>Pago Total</th>
                        <th>Direccion de entrega</th>
                        <th>Cliente</th>
                        <th>Local</th>
                        <th>Acciones</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {contratos.map(contrato => (
                        <tr key={contrato.id}>
                            <td>{formatoFechaHTML(contrato.fecha_renta)}</td>
                            <td>{formatoFechaHTML(contrato.fecha_entrega)}</td>
                            <td>{contrato.telefono_referencia}</td>
                            <td>{contrato.estado}</td>
                            <td>{contrato.pago_total}</td>
                            <td>{contrato.direccion_entrega}</td>
                            <td>{contrato.id_cliente}</td>
                            <td>{contrato.id_local}</td>
                            <td><button className="btn btn-success" onClick={() => { contratoDetalles(contrato); abrirModal(true); }}>Acciones</button></td>
                            <td><button className="btn btn-primary" onClick={() => {
                                navigate(`/detallesContrato/${contrato.id}`);
                            }}>Detalles</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}