class Cuota {
    constructor(monto) {
        this.monto = monto;
    }
    calcularTotal() {
        return this.monto;
    }
}

class CuotaConMora extends Cuota {
    calcularTotal() {
        return this.monto * 1.10;
    }
}

class CuotaFactory {
    static crearCuota(tipo, monto) {
        switch (tipo.toLowerCase()) {
            case "normal": return new Cuota(monto);
            case "mora": return new CuotaConMora(monto);
            default: throw new Error("Tipo de cuota inválido");
        }
    }
}

// Prueba para ver el resultado en consola
const miCuota = CuotaFactory.crearCuota("mora", 100);
console.log("Total a pagar con mora:", miCuota.calcularTotal(), "Bs.");