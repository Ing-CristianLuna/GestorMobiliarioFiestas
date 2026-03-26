import { useForm } from "react-hook-form";
import { registerUser } from "../../../api/user.api";
import { useNavigate } from "react-router-dom";
import { getLocalesRegister } from "../../../api/localApi";
import { useEffect, useState } from "react";

export function FormRegister() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [locales, setLocales] = useState([]);
    const navega = useNavigate();

    useEffect(() => {
        async function cargaLocales() {
            const res = await getLocalesRegister();
            setLocales(res.data);
        }
        cargaLocales();
    }, []);

    const password = watch("password");

    const onSubmit = handleSubmit(async (data) => {
        const response = await registerUser(data);
        localStorage.setItem("token", response.data.token);
        navega("/contrato");
    });

    return (
        <main className="card card-body mx-auto" style={{ maxWidth: "500px" }}>
            <h2>Registro de Usuario</h2>
            <form onSubmit={onSubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Ingrese su nombre y apellido:</label>
                        <input className="form-control" type="text" placeholder="nombre..." {...register("nombre", { required: true })}></input>
                        {errors.nombre && <span>Es requerido su nombre.</span>}
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Seleccione el local:</label>
                        <select className="form-select" key={locales.length} {...register("id_local", { setValueAs: (value) => Number(value), validate: value => value !== 0 })}>
                            <option value={0}>Seleccione un local</option>
                            {locales.map(local => (
                                <option key={local.id} value={local.id}>
                                    {local.nombre}
                                </option>
                            ))}
                        </select>
                        {errors.local_id && <span className="text-danger">Tiene que seleccionar una opcion</span>}
                    </div>

                    <div className="col-md-8">
                        <label className="form-label">Ingrese su correo:</label>
                        <input className="form-control" type="text" placeholder="correo..." {...register("correo", { required: true })}></input>
                        {errors.correo && <span>Es requerido el correo.</span>}
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Cree su contraseña:</label>
                        <input className="form-control" type="password" placeholder="contraseña..." {...register("password", { required: true })}></input>
                        {errors.password && <span>Es requerida la contraseña.</span>}
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Confirme su contraseña:</label>
                        <input className="form-control" type="password" placeholder="contraseña..." {...register("passwordConfirm", { required: true, validate: (value) => value === password || "Las contrasenas no coinciden" })}></input>
                        {errors.passwordConfirm && <span className="text-danger">{errors.passwordConfirm.message}</span>}
                    </div>
                </div>
                <button className="btn btn-primary col-md-12 mt-3">
                    Registrar
                </button>
            </form>
        </main>
    )
}