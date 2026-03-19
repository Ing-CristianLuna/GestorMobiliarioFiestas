import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { createProducto, deleteProducto, updateProducto } from "../../api/producto.api";

export function ModalProducto({ producto, agrega, cerrarModal, actualizaTabla }) {
    const { register, setValue, formState: { errors }, handleSubmit } = useForm();

    const onAgrega = handleSubmit(async (data) => {
        await createProducto(data);
        actualizaTabla();
        cerrarModal();
    });
    const onElimina = handleSubmit(async () => {
        await deleteProducto(producto.id);
        actualizaTabla();
        cerrarModal();
    });
    const onActualiza = handleSubmit(async (data) => {
        await updateProducto(producto.id, data);
        actualizaTabla();
        cerrarModal();
    });

    useEffect(() => {
        if (!agrega) {
            setValue("producto", producto.producto);
            setValue("descripcion", producto.descripcion);
            setValue("precio_unitario", producto.precio_unitario);
        }
    }, [])


    return (
        <main>
            <div className="modal d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Producto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={() => cerrarModal()}></button>
                        </div>

                        <form>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col-md-">
                                        <label className="form-label">Ingrese el producto:</label>
                                        <input className="form-control" type="text" placeholder="producto..."  {...register("producto", { required: true })}></input>
                                        {errors.producto && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>
                                    <div className="col-md-">
                                        <label className="form-label">Ingrese una descripcion</label>
                                        <textarea className="form-control" placeholder="descripcion..." {...register("descripcion", { required: true, maxLength: { value: 150, message: "Máximo 150 caracteres" } })}></textarea>
                                        {errors.descripcion && <span className="text-danger">Este campo es requerido</span>}
                                    </div>
                                    <div className="col-md-">
                                        <label>Ingrese el precio por unidad:</label>
                                        <input className="form-control" type="number" step="0.01" placeholder="precio..." {...register("precio_unitario", { required: true, valueAsNumber: true })}></input>
                                        {errors.precio_unitario && <span className="text-danger">Este campo es requerido</span>}
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