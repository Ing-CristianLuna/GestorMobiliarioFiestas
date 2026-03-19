import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { deleteLocal, updateLocal } from "../../api/localApi";

export function ModalLocal({ idDetalles, cerrarModal, actualizaTabla }) {
    const { handleSubmit, formState: { errors }, setValue, register } = useForm();

    const onActualiza = handleSubmit(async (data) => {
        await updateLocal(idDetalles.id, data);
        cerrarModal();
        actualizaTabla();
    });
    const onElimina = (async () => {
        await deleteLocal(idDetalles.id);
        cerrarModal();
        actualizaTabla();
    });

    useEffect(() => {
        function llenarFormulario() {
            setValue("nombre", idDetalles.nombre);
            setValue("direccion", idDetalles.direccion);
            setValue("telefono", idDetalles.telefono);
        }
        llenarFormulario()
    }, [])


    return (
        <main className="mt-4 p-5">
            <div className="modal d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Local</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={() => cerrarModal()}></button>
                        </div>

                        <form>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col-md-">
                                        <label className="form-label">Ingrese el nombre del local:</label>
                                        <input className="form-control" type="text" placeholder="Nombre..." {...register("nombre", { required: true })} ></input>
                                        {errors.nombre && <span>Este dato es requerido.</span>}
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col-md-">
                                        <label className="form-label">Ingrese la direccion:</label>
                                        <input className="form-control" type="text" placeholder="Direccion..." {...register("direccion", { required: true })}></input>
                                        {errors.direccion && <span>Este campo es requerido.</span>}
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col-md-">
                                        <label className="form-label">Ingrese el numero telefonico:</label>
                                        <input className="form-control" type="number" placeholder="telefono..." {...register("telefono", { required: true })}></input>
                                        {errors.telefono && <span>Este campo es requerido.</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                    onClick={() => cerrarModal()}>Cerrar</button>
                                <button type="button" className="btn btn-warning" onClick={onActualiza}>Actualizar</button>
                                <button type="button" className="btn btn-danger" onClick={onElimina}>Eliminar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}