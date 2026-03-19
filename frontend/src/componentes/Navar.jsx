import { NavLink, useNavigate } from "react-router-dom";

export function Navar() {
    const ruta = useNavigate();

    const token = localStorage.getItem("token");

    return (
        <main>
            <nav className="navbar navbar navbar-expand-lg navbar-dark fixed-top" style={{
                color: "white",
                backgroundColor: "#170080"
            }} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {token && (
                                <li className="nav-item">
                                    <NavLink to="/local" className={({ isActive }) =>
                                        `nav-link ${isActive ? "active text-primary" : "active"}`}>Locales</NavLink>
                                </li>
                            )}
                            {token && (
                                <li className="nav-item">
                                    <NavLink to="/contrato" className={({ isActive }) =>
                                        `nav-link ${isActive ? "active text-primary" : "active"}`}>Contratos</NavLink>
                                </li>
                            )}

                            {token && (
                                <li className="nav-item">
                                    <NavLink to="/empleado" className={({ isActive }) =>
                                        `nav-link ${isActive ? "active text-primary" : "active"}`} >Empleados</NavLink>
                                </li>
                            )}

                            {token && (
                                <li className="nav-item">
                                    <NavLink to="/cliente" className={({ isActive }) =>
                                        `nav-link ${isActive ? "active text-primary" : "active"}`} >Clientes</NavLink>
                                </li>
                            )}

                            {token && (
                                <li className="nav-item">
                                    <NavLink to="/producto" className={({ isActive }) =>
                                        `nav-link ${isActive ? "active text-primary" : "active"}`}>Productos</NavLink>
                                </li>
                            )}

                            {token && (
                                <li className="nav-item">
                                    <NavLink to="/inventario" className={({ isActive }) =>
                                        `nav-link ${isActive ? "active text-primary" : "active"}`}>Inventario</NavLink>
                                </li>
                            )}

                            {token && (
                                <li className="nav-item">
                                    <NavLink to="/chatbot" className={({ isActive }) =>
                                        `nav-link ${isActive ? "active text-primary" : "active"}`}>ChatBot</NavLink>
                                </li>
                            )}



                        </ul>
                        <form className="d-flex" role="search">
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle me-2" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                            </svg>
                                            Cuenta
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                            <button className="dropdown-item" onClick={() => {
                                                if (token) {
                                                    const confirm = window.confirm("Si se redirige al login, su sesion actual se cerrara, esta seguro/a?");
                                                    if (confirm) {
                                                        localStorage.removeItem("token");
                                                        ruta("/loginUser");
                                                    }
                                                } else { ruta("/loginUser"); }
                                            }
                                            }>Iniciar Sesión</button>
                                            <button className="dropdown-item" href="/registerUser" onClick={() => {
                                                if (token) {
                                                    const confirm = window.confirm("Si se redirige al registro de usuario, su sesion actual se cerrara, esta seguro/a?")
                                                    if (confirm) {
                                                        localStorage.removeItem("token");
                                                        ruta("/registerUser");
                                                    }
                                                } else { ruta("/registerUser"); }
                                            }}>Registrarse</button>
                                            <li><a className="dropdown-item text-danger" onClick={() => { localStorage.removeItem("token"); ruta('/loginUser'); }}>Cerrar Sesión</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </main>
    )
}

//fixed-top