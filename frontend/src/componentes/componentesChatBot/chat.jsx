import { eliminaMensajes } from "../../api/mensaje.api";
import { useForm } from "react-hook-form";

export function Chatbot({ mensajesGuardados, enviar, actualizaMensajes }) {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = handleSubmit((data) => {
        enviar(data.contenido);
        reset();
    });

    const elimina = () => {
        console.log("Eliminando mensajes");
        eliminaMensajes();
        actualizaMensajes();
    }

    return (
        <main>
            <div className="card card-body w-50 mx-auto border" style={{ width: "650px" }}>
                <h3>Chatbot 🤖</h3>
                <div className="overflow-auto" style={{ height: "380px" }}>
                    {mensajesGuardados.map(m => {
                        if (m.rol === "usuario") {
                            return (
                                <div key={m.id} className="d-flex flex-row-reverse my-2">
                                    <div className="d-inline-block">
                                        <div className="card card-body bg-info rounded-5 pb-2" style={{ maxWidth: "300px", minWidth: "100px", whiteSpace: "pre-line" }}>
                                            <p>{m.contenido}</p>
                                        </div>
                                    </div>
                                </div>)
                        } else {
                            return (
                                <div key={m.id} className="d-flex flex-row">
                                    <div className="d-inline-block">
                                        <div className="card card-body rounded-5" style={{ backgroundColor: "#D6D6D6", maxWidth: "300px", minWidth: "100px", whiteSpace: "pre-line" }}>
                                            <p>{m.contenido}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>

                <form onSubmit={onSubmit}>
                    <div className="row g-3 mt-3">
                        <div className="col-md-4">
                            <button className="btn btn-outline-secondary text-danger" style={{ fontSize: "12px" }}
                                onClick={elimina}>
                                Terminar conversacion</button>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-outline-secondary" style={{ fontSize: "12px" }}>Que puedo preguntar?</button>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-outline-secondary" style={{ fontSize: "12px" }}>Cual es tu objetivo?</button>
                        </div>
                    </div>
                    <input className="form-control my-3 rounded-pill" autoComplete="off" placeholder="Escribe..." {...register("contenido", { required: true })} />
                    <button className="btn btn-primary col-md-12">Enviar</button>
                </form>

            </div>
        </main>
    );
}

















/**/