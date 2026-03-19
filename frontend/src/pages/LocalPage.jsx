import { useState, useEffect } from "react";
import { getLocales } from "../api/localApi";
import { TablaLocales } from "../componentes/componentesLocal/TablaLocales";
import { LocalForm } from "../componentes/forms/LocalForm";
import { ModalLocal } from "../componentes/componentesLocal/ModalLocal";

export function LocalPage() {
    const [locales, setLocales] = useState([]);
    const [idDetalles, setIdDetalles] = useState(null);
    const [activaModal, setActivaModal] = useState(false);

    async function cargaLocales() {
        const res = await getLocales();
        setLocales(res.data);
    }

    function cerrarModal() {
        setActivaModal(false);
    }

    useEffect(() => {
        cargaLocales();
    }, [])

    /*useEffect(() => {
        if (idDetalles) {
            setActivaModal(true);
        }
    }, [idDetalles]);*/


    return (
        <main className="container mx-5 mt-5 p-5">
            <LocalForm actualizaTabla={cargaLocales} />
            <TablaLocales locales={locales} idDetalles={setIdDetalles} activaModal={setActivaModal} />
            {activaModal == true && <ModalLocal idDetalles={idDetalles} cerrarModal={cerrarModal} actualizaTabla={cargaLocales} />}
        </main>
    )
}