import { useEffect, useState } from "react";
import { getProductos } from "../api/producto.api";
import { TablaProducto } from "../componentes/componentesProducto/TablaProducto";
import { ModalProducto } from "../componentes/componentesProducto/ModalProducto";

export function ProductoPage() {
    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState(null);
    const [agrega, setAgrega] = useState(false);
    const [activaModal, setActivaModal] = useState(false);

    async function cargarProductos() {
        const results = await getProductos();
        setProductos(results.data);
    }

    function cerrarModal() {
        setActivaModal(false);
        setAgrega(false);
    }

    useEffect(() => {
        cargarProductos();
    }, []);

    return (
        <main className="container my-5 p-5">
            <button className="btn btn-primary col-md-12" onClick={() => { setAgrega(true); setActivaModal(true); }}>Agregar Producto</button>
            <TablaProducto productos={productos} mandaProducto={setProducto} activaModal={setActivaModal} />
            {activaModal && <ModalProducto producto={producto} agrega={agrega} cerrarModal={cerrarModal} actualizaTabla={cargarProductos} />}
        </main>
    )
}