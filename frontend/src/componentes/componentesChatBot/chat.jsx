import { useForm } from "react-hook-form";

export function Chatbot({ mensajesGuardados, enviar }) {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = handleSubmit((data) => {
        enviar(data.contenido);
        reset();
    });

    return (
        <main>
            <div className="card card-body w-50 mx-auto border" style={{ width: "650px" }}>
                <h3>Chatbot 🤖</h3>
                <div className="overflow-auto" style={{ height: "380px" }}>
                    {mensajesGuardados.map(m => {
                        if (m.rol === "usuario") {
                            return (
                                <div key={m.id} className="d-flex flex-row-reverse my-2">
                                    <div className="col-6">
                                        <div className="card card-body bg-info"><p>{m.contenido}</p></div>
                                    </div>
                                </div>)
                        } else {
                            return (
                                <div key={m.id} className="d-flex flex-row">
                                    <div className=" col-6">
                                        <div className="card card-body bg-secundary"><p>{m.contenido}</p></div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>

                <form onSubmit={onSubmit}>
                    <input className="form-control my-3 mt-5" placeholder="Escribe..." {...register("contenido", { required: true })} />
                    <button className="btn btn-primary col-md-12">Enviar</button>
                </form>

            </div>
        </main>
    );
}

















/**/