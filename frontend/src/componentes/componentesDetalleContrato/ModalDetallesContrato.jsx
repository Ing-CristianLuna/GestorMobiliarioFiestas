import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { SelectProducto } from "../selects/SelectProducto";
import { createDetallesContrato, deleteDetallesContrato, updateDetallesContrato } from "../../api/contrato_producto.api";

export function ModalDetallesContratos({ detallesContrato, agrega, cerrarModal, actualizaTabla, idContrato }) {
    const { register, setValue, formState: { errors }, handleSubmit } = useForm();

    const onAgrega = handleSubmit(async (data) => {
        await createDetallesContrato(data);
        actualizaTabla();
        cerrarModal();
    });
    const onElimina = handleSubmit(async () => {
        await deleteDetallesContrato(detallesContrato.id);
        actualizaTabla();
        cerrarModal();
    });
    const onActualiza = handleSubmit(async (data) => {
        await updateDetallesContrato(detallesContrato.id, data);
        actualizaTabla();
        cerrarModal();
    });


    useEffect(() => {
        if (!agrega) {
            setValue("id_contrato", detallesContrato.id_contrato);
            setValue("id_producto", detallesContrato.id_producto);
            setValue("cantidad", detallesContrato.cantidad);
            setValue("precio_unitario", detallesContrato.precio_unitario);
        } else {
            setValue("id_contrato", idContrato);
        }
    }, []);

    return (
        <main>
            <div className="modal d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Detalles Contrato</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={() => cerrarModal()}></button>
                        </div>

                        <form>
                            <div className="modal-body">

                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Contrato:</label>
                                        <input className="form-control" type="number" placeholder="contrato..." readOnly {...register("id_contrato", { required: true, valueAsNumber: true })}></input>
                                        {errors.id_contrato && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <SelectProducto register={register} errors={errors} />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label">Ingrese la cantidad comprada:</label>
                                        <input className="form-control" type="number" placeholder="cantidad..."  {...register("cantidad", { required: true, valueAsNumber: true })}></input>
                                        {errors.cantidad && <span className="text-danger">Este campo es requerido.</span>}
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label">Ingrese el precio comprado por unidad:</label>
                                        <input className="form-control" type="number" step="0.01" placeholder="precio..." {...register("precio_unitario", { required: true, valueAsNumber: true })}></input>
                                        {errors.precio_unitario && <span className="text-danger">Este campo es requerido.</span>}
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