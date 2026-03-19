import { useState, useEffect } from "react";
import { getInventarios } from "../api/inventario.api";
import { TablaInventarios } from "../componentes/componentesInventario.jsx/TablasInventarios";
import { ModalInventario } from "../componentes/componentesInventario.jsx/ModalInventario";

export function InventarioPage() {
    const [inventarios, setInventarios] = useState([]);
    const [inventario, setInventario] = useState(null);
    const [muestraModal, setMuestraModal] = useState(false);
    const [crea, setCrea] = useState(false);

    async function cargaInventarios() {
        const res = await getInventarios();
        setInventarios(res.data);
    }

    function cerrarModal() {
        setMuestraModal(false);
        setCrea(false);
    }

    useEffect(() => {
        cargaInventarios();
    }, []);

    return (
        <main className="container p-5 mx-5 my-5">
            <button className="btn btn-primary col-md-12" onClick={() => { setCrea(true); setMuestraModal(true); }}>Crear Inventario</button>
            <TablaInventarios inventarios={inventarios} mandaInventario={setInventario} muestraModal={setMuestraModal} />
            {muestraModal && <ModalInventario inventario={inventario} agrega={crea} cerrarModal={cerrarModal} actualizaTabla={cargaInventarios} />}
        </main>
    )
}