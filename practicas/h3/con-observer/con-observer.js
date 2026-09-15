class ClienteNotificador {
    actualizar(datosPago) {
        console.log(`[NOTIFICACIÓN CLIENTE] Hola ${datosPago.cliente}, se confirmó tu pago de ${datosPago.monto} Bs.`);
    }
}

class ContabilidadModulo {
    actualizar(datosPago) {
        console.log(`[CONTABILIDAD] Registro de ingreso por ${datosPago.monto} Bs. ID Pago: ${datosPago.id}`);
    }
}

class GestorCobranzaSubject {
    constructor() {
        this.observadores = [];
    }

    suscribir(observador) {
        this.observadores.push(observador);
    }

    desuscribir(observador) {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    notificar(datosPago) {
        this.observadores.forEach(observador => {
            observador.actualizar(datosPago);
        });
    }

    procesarPago(id, cliente, monto) {
        console.log(`\n--- Procesando pago de ${monto} Bs para ${cliente} ---`);
        const datosPago = { id: id, cliente: cliente, monto: monto };     
        this.notificar(datosPago);
    }
}

const gestorCobranza = new GestorCobranzaSubject();
const servicioCliente = new ClienteNotificador();
const servicioContabilidad = new ContabilidadModulo();

gestorCobranza.suscribir(servicioCliente);
gestorCobranza.suscribir(servicioContabilidad);
gestorCobranza.procesarPago(11, "Joel Gonzalez", 250);