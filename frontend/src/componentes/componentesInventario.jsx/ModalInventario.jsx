import { SelectLocal } from "../selects/SelectLocal";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { SelectProducto } from "../selects/SelectProducto";
import { createInventario, deleteInventario, updateInventario } from "../../api/inventario.api";

export function ModalInventario({ inventario, agrega, actualizaTabla, cerrarModal }) {
    const { register, formState: { errors }, handleSubmit, setValue } = useForm();

    const onAgrega = handleSubmit(async (data) => {
        await createInventario(data);
        actualizaTabla();
        cerrarModal();
    });
    const onElimina = handleSubmit(async () => {
        await deleteInventario(inventario.id);
        actualizaTabla();
        cerrarModal();
    });
    const onActualiza = handleSubmit(async (data) => {
        await updateInventario(inventario.id, data);
        actualizaTabla();
        cerrarModal();
    });

    useEffect(() => {
        if (!agrega) {
            setValue("cantidad_total", inventario.cantidad_total);
            setValue("cantidad_disponible", inventario.cantidad_disponible);
            setValue("cantidad_ocupada", inventario.cantidad_ocupada);
            setValue("id_producto", inventario.id_producto);
            setValue("id_local", inventario.id_local);
        }
    }, [])

    return (
        <main>
            <div className="modal d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Producto Inventario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={() => cerrarModal()}></button>
                        </div>

                        <form>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <SelectProducto register={register} errors={errors} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese la cantidad total: </label>
                                        <input className="form-control" type="number" placeholder="cantidad..." {...register("cantidad_total", { required: true, valueAsNumber: true })}></input>
                                        {errors.cantidad_total && <span className="text-danger">Este campo es requerido</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese la cantidad disponible </label>
                                        <input className="form-control" type="number" placeholder="cantidad..." {...register("cantidad_disponible", { required: true, valueAsNumber: true })}></input>
                                        {errors.cantidad_disponible && <span className="text-danger">Este campo es requerido</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese la cantidad ocupada </label>
                                        <input className="form-control" type="number" placeholder="cantidad..." {...register("cantidad_ocupada", { required: true, valueAsNumber: true })}></input>
                                        {errors.cantidad_ocupada && <span className="text-danger">Este campo es requerido</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <SelectLocal register={register} errors={errors} />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => cerrarModal()}>Cerrar</button>
                                {agrega && <button type="button" className="btn btn-primary" onClick={onAgrega}>Agregar</button>}
                                {!agrega && <button type="button" className="btn btn-warning" onClick={onActualiza}>Actualizar</button>}
                                {!agrega && <button type="button" className="btn btn-danger" onClick={onElimina}>Eliminar</button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}