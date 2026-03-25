import { useEffect, useState } from "react";
import { getDetallesContratos } from "../api/contrato_producto.api";
import { useParams } from "react-router-dom";
import { TablaDetallesContratos } from "../componentes/componentesDetalleContrato/tablaDetallesContrato";
import { ModalDetallesContratos } from "../componentes/componentesDetalleContrato/ModalDetallesContrato";

export function DetallesContratoPage() {
    const [detallesContratos, setDetallesContratos] = useState([]);
    const [detallesContrato, setDetallesContrato] = useState([]);
    const [muestraModal, setMuestraModal] = useState(false);
    const [agrega, setAgrega] = useState(false);
    //const [idContrato, setIdContrato] = useState([]);

    function cerrarModal() {
        setMuestraModal(false);
        setAgrega(false);
    }

    const { id } = useParams();
    async function obtenerDatos() {
        const resultados = await getDetallesContratos(id);
        setDetallesContratos(resultados.data);
    }

    useEffect(() => {
        obtenerDatos();
    }, [])

    return (
        <main className="container mt-5 p-5">
            <button className="btn btn-primary my-3 col-md-12" onClick={
                () => { setMuestraModal(true); setAgrega(true); }}>
                Agregar Detalles</button>
            <TablaDetallesContratos detallesContratos={detallesContratos} mandaDetalleContrato={setDetallesContrato} muestraModal={setMuestraModal} />
            {muestraModal && <ModalDetallesContratos detallesContrato={detallesContrato} agrega={agrega} cerrarModal={cerrarModal} actualizaTabla={obtenerDatos} idContrato={id} />}
        </main>
    )
}