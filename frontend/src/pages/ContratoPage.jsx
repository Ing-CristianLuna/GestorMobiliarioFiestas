import { useState, useEffect } from "react";
import { TablaContratos } from "../componentes/componentesContrato/TablaContrato";
import { getContratos } from "../api/contrato.api";
import { ModalContrato } from "../componentes/componentesContrato/ModalContrato";
import { useNavigate } from "react-router-dom";

export function ContratoPage() {
    const [contratos, setContratos] = useState([]);
    const [contrato, setContrato] = useState([]);
    const [muestraModal, setMuestraModal] = useState(false);
    const [agrega, setAgrega] = useState(false);
    const navega = useNavigate();

    function cerrarModal() {
        setMuestraModal(false);
        setAgrega(false);
    }

    async function cargaContratos() {
        const result = await getContratos();
        setContratos(result.data);
    }

    useEffect(() => {
        cargaContratos();
    }, [])


    return (
        <main className="mx-5 mt-5 p-5">
            <button className="btn btn-primary col-md-12" onClick={() => { setAgrega(true); setMuestraModal(true); }}>Agregar Contrato</button>
            <TablaContratos contratos={contratos} contratoDetalles={setContrato} abrirModal={setMuestraModal} />
            {muestraModal && <ModalContrato contrato={contrato} agrega={agrega} actualizaTabla={cargaContratos} cerrarModal={cerrarModal} />}
        </main>
    )
} 