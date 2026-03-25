import { useState, useEffect } from "react";
import { getEmpleados } from "../api/empleado.api";
import { TablaEmpleado } from "../componentes/componentesEmpleado/TablaEmpleado";
import { ModalEmpleado } from "../componentes/componentesEmpleado/ModalEmpleado";

export function EmpleadoPage() {
    const [muestraModal, setMuestraModal] = useState(false);
    const [empleados, setEmpleados] = useState([]);
    const [empleado, setEmpleado] = useState(null);
    const [agrega, setAgrega] = useState(false);

    async function cargaEmpleados() {
        const res = await getEmpleados();
        setEmpleados(res.data);
    }

    function cerrarModal() {
        setMuestraModal(false);
        setAgrega(false);
    }
    function abreModal() {
        setMuestraModal(true);
    }

    useEffect(() => {
        cargaEmpleados();
    }, [])


    return (
        <main className="container my-5 p-5">
            <button className="btn btn-primary col-md-12" onClick={() => { setAgrega(true); abreModal(); }}>Agregar Empleado</button>

            <TablaEmpleado empleados={empleados} mandaEmpleado={setEmpleado} abreModal={abreModal} />

            {muestraModal && <ModalEmpleado empleado={empleado} agrega={agrega} cerrarModal={cerrarModal}
                actualizaTabla={cargaEmpleados} />}
        </main>
    )
}