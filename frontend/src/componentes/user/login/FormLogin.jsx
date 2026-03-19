import { useForm } from "react-hook-form";
import { loginUser } from "../../../api/user.api";
import { useNavigate } from "react-router-dom";

export function FormLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navega = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        const response = await loginUser(data);
        localStorage.setItem("token", response.data.token);
        navega("/contrato");
    })

    return (
        <main className="card card-body">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <div className="row g-3">
                    <div className="col-md-12">
                        <label className="form-label">Ingrese su correo:</label>
                        <input className="form-control" type="text" placeholder="correo..." {...register("correo", { required: true })}></input>
                        {errors.correo && <span>Es requerido el correo</span>}
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Ingrese su contraseña:</label>
                        <input className="form-control" type="password" placeholder="contraseña..." {...register("password", { required: true })}></input>
                        {errors.password && <span>Es requerida la contraseña.</span>}
                    </div>
                </div>

                <button className="btn btn-primary col-md-12 mt-3">
                    Ingresar
                </button>
            </form>
        </main>
    )
}