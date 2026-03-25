export function Paginador({ paginaActual, setPaginaActual, numeroPaginas }) {

    return (
        <main className="">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${paginaActual === 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => setPaginaActual(paginaActual - 1)}>Previo</button>
                    </li>

                    {[...Array(numeroPaginas)].map((_, i) => (
                        <li key={i} className="page-item">
                            <button className="page-link" onClick={() => setPaginaActual(i + 1)}>
                                {i + 1}
                            </button>
                        </li>
                    ))}

                    <li className={`page-item ${paginaActual === numeroPaginas ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => setPaginaActual(paginaActual + 1)}>Sig.</button>
                    </li>
                </ul>
            </nav>
        </main>
    )
}