import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Paginador } from "../Paginador";
import { Pagina } from "../../utils/Paginacion";

export function TablaContratos({ contratos, contratoDetalles, abrirModal }) {
    const navigate = useNavigate();
    const [paginaActual, setPaginaActual] = useState(1);
    const { datosAMostrar, numeroPaginas } = Pagina(contratos, paginaActual);

    function formatoFechaHTML(fecha) {
        const fechaFormatoHora = new Date(fecha).setHours(new Date(fecha).getHours() - 6);
        const fechaFormateada = new Date(fechaFormatoHora).toISOString().slice(0, 16).replace('T', ' ');
        return fechaFormateada;
    }

    return (
        <main className="card card-body mt-3 position-relative" style={{ minHeight: "500px" }}>
            <table className="table ">
                <thead>
                    <tr>
                        <th>ID</th>
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
                    {datosAMostrar.map(contrato => (
                        <tr key={contrato.id}>
                            <td>{contrato.id}</td>
                            <td>{formatoFechaHTML(contrato.fecha_renta)}</td>
                            <td>{formatoFechaHTML(contrato.fecha_entrega)}</td>
                            <td>{contrato.telefono_referencia}</td>
                            <td>{contrato.estado}</td>
                            <td>{contrato.pago_total}</td>
                            <td>{contrato.direccion_entrega}</td>
                            <td>{contrato.id_cliente}-{contrato.cliente.nombre} {contrato.cliente.apellido_p}</td>
                            <td>{contrato.id_local}-{contrato.local.nombre}</td>
                            <td><button className="btn btn-success" onClick={() => { contratoDetalles(contrato); abrirModal(true); }}>Acciones</button></td>
                            <td><button className="btn btn-primary" onClick={() => {
                                navigate(`/detallesContrato/${contrato.id}`);
                            }}>Detalles</button></td>
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