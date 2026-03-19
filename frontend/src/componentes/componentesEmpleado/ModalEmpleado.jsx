import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { SelectLocal } from "../selects/SelectLocal";
import { updateEmpleado, deleteEmpleado, createEmpleado } from "../../api/empleado.api";

export function ModalEmpleado({ empleado, agrega, cerrarModal, actualizaTabla }) {
    const { formState: { errors }, register, setValue, handleSubmit } = useForm();

    const onAgrega = handleSubmit(async (data) => {
        await createEmpleado(data);
        cerrarModal();
        actualizaTabla();
    })
    const onActualiza = handleSubmit(async (data) => {
        await updateEmpleado(empleado.id, data);
        cerrarModal();
        actualizaTabla();
    })
    const onElimina = handleSubmit(async (data) => {
        await deleteEmpleado(empleado.id);
        cerrarModal();
        actualizaTabla();
    })

    useEffect(() => {
        if (empleado && !agrega) {
            setValue("nombre", empleado.nombre);
            setValue("apellido_p", empleado.apellido_p);
            setValue("apellido_m", empleado.apellido_m);
            setValue("edad", empleado.edad);
            setValue("puesto", empleado.puesto);
            setValue("direccion", empleado.direccion);
            setValue("id_local", Number(empleado.id_local));
        }
    }, []);

    return (
        <main>
            <div className="modal d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Empleado</h5>
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
                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese la edad: </label>
                                        <input className="form-control" type="number" placeholder="edad..." {...register("edad", { required: true, valueAsNumber: true })} ></input>
                                        {errors.edad && <span className="text-danger">Este campo es requerido</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese el puesto</label>
                                        <input className="form-control" type="text" placeholder="puesto..." {...register("puesto", { required: true })} ></input>
                                        {errors.puesto && <span className="text-danger">Este campo es requerido</span>}
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label">Ingrese la direccion:</label>
                                        <input className="form-control" type="text" placeholder="direccion..." {...register("direccion", { required: true })} ></input>
                                        {errors.direccion && <span className="text-danger">Este campo es requerido</span>}
                                    </div>
                                    <div className="col-md-12">
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