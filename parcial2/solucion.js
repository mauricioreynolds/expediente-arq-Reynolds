// Solucion: Mauricio Ivan Reynolds Ribera

class MultaInfantilStrategy 
{
    calcularMulta(diasAtraso) {
        return 0;
    }
}

class MultaAdultoStrategy 
{
    calcularMulta(diasAtraso) {
        return diasAtraso * 2;
    }
}

class MultaTerceraEdadStrategy 
{
    calcularMulta(diasAtraso) {
        const totalCalculado = diasAtraso * 1;
        if (totalCalculado > 20) {
            return 20;
        }
        return totalCalculado;
    }
}

class GestorMultasContext 
{
    constructor(estrategia) {
        this.estrategia = estrategia;
    }

    cambiarEstrategia(nuevaEstrategia) {
        this.estrategia = nuevaEstrategia;
    }

    calcularMultaTotal(diasAtraso) {
        return this.estrategia.calcularMulta(diasAtraso);
    }
}

const estrategiaAdulto = new MultaAdultoStrategy();
const gestor = new GestorMultasContext(estrategiaAdulto);
const diasAtrasados = 5;
const montoPagar = gestor.calcularMultaTotal(diasAtrasados);

console.log("'Socio Adulto' - Dias atraso:", diasAtrasados, "- Total a pagar:", montoPagar, "Bs.");


const estrategiaTerceraEdad = new MultaTerceraEdadStrategy();
gestor.cambiarEstrategia(estrategiaTerceraEdad);

const montoTerceraEdad = gestor.calcularMultaTotal(25);
console.log("'Socio Tercera Edad' - Dias atraso: 25 - Total a pagar (con tope):", montoTerceraEdad, "Bs.");