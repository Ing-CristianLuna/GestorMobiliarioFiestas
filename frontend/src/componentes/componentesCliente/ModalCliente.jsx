import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { createCliente, deleteCliente, updateCliente } from '../../api/cliente.api';

export function ModalCliente({ cliente, cerrarModal, agrega, actualizaTabla }) {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const onAgrega = handleSubmit(async (data) => {
        await createCliente(data);
        actualizaTabla();
        cerrarModal();
    })
    const onElimina = handleSubmit(async () => {
        await deleteCliente(cliente.id);
        actualizaTabla();
        cerrarModal();
    })
    const onActualiza = handleSubmit(async (data) => {
        await updateCliente(cliente.id, data);
        actualizaTabla();
        cerrarModal();
    })

    useEffect(() => {
        if (!agrega) {
            setValue("nombre", cliente.nombre);
            setValue("apellido_p", cliente.apellido_p);
            setValue("apellido_m", cliente.apellido_m);
            setValue("direccion_cliente", cliente.direccion_cliente);
            setValue("telefono", cliente.telefono);
        }
    }, []);

    return (
        <main>
            <div className="modal d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Cliente</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={() => cerrarModal()}></button>
                        </div>

                        <form>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <label className="form-label">Ingrese el nombre:</label>
                                        <input className="form-control" type="text" placeholder="nombre..."  {...register("nombre", { required: true })}></input>
                                        {errors.nombre && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese el apellido paterno:</label>
                                        <input className="form-control" type="text" placeholder="apellido p..." {...register("apellido_p", { required: true })} ></input>
                                        {errors.apellido_p && <span className="text-danger">Este campo es requerido</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese el apellido materno: </label>
                                        <input className="form-control" type="text" placeholder="apellido m..." {...register("apellido_m", { required: true })} ></input>
                                        {errors.apellido_m && <span className="text-danger">Este campo es requerido</span>}
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label">Ingrese su direccion: </label>
                                        <input className="form-control" type="text" placeholder="direccion..." {...register("direccion_cliente", { required: true })}></input>
                                        {errors.direccion_cliente && <span className="text-danger">Este campo es requerido</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese el telefono:</label>
                                        <input className="form-control" type="text" placeholder="telefono..." {...register("telefono", { required: true })}></input>
                                        {errors.telefono && <span className="text-danger">Este campo es requerido</span>}
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