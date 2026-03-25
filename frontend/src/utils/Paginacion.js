import { useMemo } from "react";

export function Pagina(contratos, paginaActual) {

    const datosOrdenados = useMemo(() => {
        return [...contratos].sort((a, b) => b.id - a.id);
    }, [contratos]);

    const numeroFilas = 6;
    const indiceFinal = numeroFilas * paginaActual;
    const indiceInicial = indiceFinal - numeroFilas;
    const datosAMostrar = datosOrdenados.slice(indiceInicial, indiceFinal);
    const numeroPaginas = Math.ceil(datosOrdenados.length / numeroFilas);

    return { datosAMostrar, numeroPaginas }
}