import { getLocales } from "../../api/localApi";
import { useState, useEffect } from "react";

export function SelectLocal({ register, errors }) {
    const [locales, setLocales] = useState([]);

    useEffect(() => {
        async function traerLocales() {
            const res = await getLocales();
            setLocales(res.data);
        }
        traerLocales();
    }, [])

    return (
        <main>
            <label className="form-label">Seleccione el local:</label>
            <select className="form-select" key={locales.length} {...register("id_local", { setValueAs: (value) => Number(value), validate: value => value !== 0 })}>
                <option value={0}>Seleccione un local</option>
                {locales.map(local => (
                    <option key={local.id} value={local.id}>
                        {local.nombre}
                    </option>
                ))}
            </select>
            {errors.local_id && <span className="text-danger">Tiene que seleccionar una opcion</span>}
        </main>
    )
}