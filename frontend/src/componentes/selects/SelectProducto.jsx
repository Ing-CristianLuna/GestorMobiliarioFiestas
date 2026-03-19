import { getProductos } from "../../api/producto.api";
import { useEffect, useState } from "react";


export function SelectProducto({ register, errors }) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function cargarProductos() {
            const res = await getProductos();
            setProductos(res.data);
        }
        cargarProductos();
    }, []);

    return (
        <main>
            <label className="form-label">Seleccione un producto:</label>
            <select className="form-control" key={productos.length} {...register("id_producto", { required: true, valueAsNumber: true, validate: value => value !== 0 })}>
                <option value={0}>Seleccione un producto</option>
                {productos.map(producto => (
                    <option key={producto.id} value={producto.id}>{producto.producto}</option>
                ))}
                {errors.id_producto && <span className="text-danger">Este campo es requerido.</span>}
            </select>
        </main>
    )
}