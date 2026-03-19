import { useForm } from 'react-hook-form';
import { createLocal } from '../../api/localApi';

export function LocalForm({ actualizaTabla }) {
    const { formState: { errors }, reset, register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        console.log(data)
        await createLocal(data);
        reset();
        actualizaTabla(); //Para que en cuanto agregue el dato, actualice la tabla
    });

    return (
        <main className='card card-body my-3'>
            <form onSubmit={onSubmit}>
                <div className='row g-3'>
                    <div className='col-md-4'>
                        <label className='form-label'>Ingrese el nombre del local:</label>
                        <input className='form-control' type="text" placeholder="Nombre..." {...register("nombre", { required: true })} ></input>
                        {errors.nombre && <span className='text-danger'>Este dato es requerido.</span>}
                    </div>
                    <div className='col-md-4'>
                        <label className='form-label'>Ingrese la direccion:</label>
                        <input className='form-control' type="text" placeholder="direccion..." {...register("direccion", { required: true })}></input>
                        {errors.direccion && <span className='text-danger'>Este campo es requerido.</span>}
                    </div>
                    <div className='col-md-4'>
                        <label className='form-label'>Ingrese el numero telefonico:</label>
                        <input className='form-control' type="number" placeholder="telefono..." {...register("telefono", { required: true })}></input>
                        {errors.telefono && <span className='text-danger'>Este campo es requerido.</span>}
                    </div>
                    <div className='col-md-12'>
                        <button className='btn btn-primary form-control'>Guardar</button>
                    </div>
                </div>
            </form>
        </main>
    )
}