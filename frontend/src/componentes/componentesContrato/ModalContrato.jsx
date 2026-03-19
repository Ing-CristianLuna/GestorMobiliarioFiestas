import { SelectLocal } from "../selects/SelectLocal";
import { SelectCliente } from "../selects/SelectCliente";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createContrato, deleteContrato, updateContrato } from "../../api/contrato.api";


export function ModalContrato({ contrato, agrega, actualizaTabla, cerrarModal }) {
    const { register, setValue, formState: { errors }, handleSubmit } = useForm();

    function formatoFecha(fecha) {
        const fechaFormatoHora = new Date(fecha).setHours(new Date(fecha).getHours());
        const formatoDate = new Date(fechaFormatoHora);
        return formatoDate;
    }

    function formatoFechaHTML(fecha) {
        const fechaFormatoHora = new Date(fecha).setHours(new Date(fecha).getHours() - 6);
        return new Date(fechaFormatoHora).toISOString().slice(0, 16);
    }

    const onAgrega = handleSubmit(async (data) => {
        data.fecha_renta = formatoFecha(data.fecha_renta);
        data.fecha_entrega = formatoFecha(data.fecha_entrega);
        await createContrato(data);
        actualizaTabla();
        cerrarModal();
    })
    const onActualiza = handleSubmit(async (data) => {
        data.fecha_renta = formatoFecha(data.fecha_renta);
        data.fecha_entrega = formatoFecha(data.fecha_entrega);
        await updateContrato(contrato.id, data);
        actualizaTabla();
        cerrarModal();
    })
    const onElimina = handleSubmit(async () => {
        await deleteContrato(contrato.id);
        actualizaTabla();
        cerrarModal();
    })

    useEffect(() => {
        if (!agrega) {
            setValue("fecha_renta", formatoFechaHTML(contrato.fecha_renta));
            setValue("fecha_entrega", formatoFechaHTML(contrato.fecha_entrega));
            setValue("telefono_referencia", contrato.telefono_referencia);
            setValue("estado", contrato.estado);
            setValue("pago_total", contrato.pago_total);
            setValue("direccion_entrega", contrato.direccion_entrega);
            setValue("id_cliente", contrato.id_cliente);
            setValue("id_local", contrato.id_local);
        }
    }, [])

    return (
        <main>
            <div className="modal d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Contrato</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={() => cerrarModal()}></button>
                        </div>

                        <form>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese la fecha de renta:</label>
                                        <input className="form-control" type="datetime-local" placeholder="fecha"  {...register("fecha_renta", { required: true })}></input>
                                        {errors.fecha_renta && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese la fecha de entrega:</label>
                                        <input className="form-control" type="datetime-local" placeholder="fecha"  {...register("fecha_entrega", { required: true })}></input>
                                        {errors.fecha_entrega && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Numero de referencia :</label>
                                        <input className="form-control" type="text" placeholder="telefono..."  {...register("telefono_referencia", { required: true })}></input>
                                        {errors.telefono_referencia && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese el estado:</label>
                                        <select className="form-select" {...register("estado", { required: true })}>
                                            <option value="Pendiente">Pendiente</option>
                                            <option value="Finalizado">Finalizado</option>
                                            <option value="En proceso">En proceso</option>
                                        </select>
                                        {errors.estado && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese el pago total :</label>
                                        <input className="form-control" type="number" step="0.01" placeholder="pago..."  {...register("pago_total", { required: true, valueAsNumber: true })}></input>
                                        {errors.pago_total && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Ingrese la direccion :</label>
                                        <input className="form-control" type="text" placeholder="direccion..."  {...register("direccion_entrega", { required: true })}></input>
                                        {errors.direccion_entrega && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>

                                    <div className="col-md-6">
                                        <SelectCliente register={register} errors={errors} />
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