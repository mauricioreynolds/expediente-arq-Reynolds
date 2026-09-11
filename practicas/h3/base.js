class Cuota {
    constructor(id, monto, cliente) {
        this.id = id;
        this.monto = monto;
        this.cliente = cliente;
    }
}

class RepositorioCuota {
    guardar(cuota) {
        console.log(`[BD] Cuota ${cuota.id} guardada para ${cuota.cliente}.`);
    }
}

class GestorCobranza {
    constructor() {
        this._repo = new RepositorioCuota();
    }

    procesarPago(cuota) {
        this._repo.guardar(cuota);
        console.log(`[PAGO] Procesado por ${cuota.monto} Bs.`);
    }
}

const cuotaBase = new Cuota(1, 100, "Gustavo Toledo");
const gestor = new GestorCobranza();
gestor.procesarPago(cuotaBase);