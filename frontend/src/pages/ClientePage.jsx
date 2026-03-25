import { useState, useEffect } from "react";
import { getClientes } from "../api/cliente.api";
import { TablaCliente } from "../componentes/componentesCliente/TablaCliente";
import { ModalCliente } from "../componentes/componentesCliente/ModalCliente";

export function ClientePage() {
    const [clientes, setClientes] = useState([]);
    const [cliente, setCliente] = useState([]);
    const [activaModal, setActivaModal] = useState(false);
    const [agrega, setAgrega] = useState(false);

    async function cargaClientes() {
        const result = await getClientes();
        setClientes(result.data);
    }

    function activarModal() {
        setActivaModal(true);
    }
    function cerrarModal() {
        setActivaModal(false);
        setAgrega(false);
    }

    useEffect(() => {
        cargaClientes();
    }, []);

    return (
        <main className="container my-5  p-5">
            <button className="btn btn-primary col-md-12" onClick={() => { setAgrega(true); activarModal(); }}>Agregar Cliente</button>
            < TablaCliente clientes={clientes} clienteDetalles={setCliente} activarModal={activarModal} />
            {activaModal && < ModalCliente cliente={cliente} agrega={agrega} cerrarModal={cerrarModal}
                actualizaTabla={cargaClientes} />}
        </main>
    )
}