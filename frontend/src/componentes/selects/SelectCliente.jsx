import { getClientes } from "../../api/cliente.api";
import { useEffect, useState } from "react";

export function SelectCliente({ register, errors }) {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        async function cargaClientes() {
            const results = await getClientes();
            setClientes(results.data);
        }
        cargaClientes();
    }, [])

    return (
        <main>
            <label className="form-label">Seleccione un cliente</label>
            <input className="form-control" list="clientes_list" placeholder="buscar..." {...register("id_cliente", { required: true, valueAsNumber: true })}></input>
            <datalist id="clientes_list" >
                {clientes.map(cliente => (
                    <option
                        key={cliente.id}
                        value={cliente.id}
                        label={`${cliente.nombre} ${cliente.apellido_p} ${cliente.apellido_m}`} >
                    </option>
                ))}
            </datalist>
            {errors.id_cliente && <span className="text-danger">Este dato es requerido</span>}
        </main>
    )
}