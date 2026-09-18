// Decorador  que guarda nuestra facturea o rcibo de pago

class Factura {
    constructor(monto) {
        this.monto = monto;
    }

    obtenerMonto() {
        return this.monto;
    }

    obtenerDescripcion() {
        return "Cobro de Servicio";
    }
}
class DecoradorFactura {
    constructor(factura) {
        this.factura = factura;
    }

    obtenerMonto() {
        return this.factura.obtenerMonto();
    }

    obtenerDescripcion() {
        return this.factura.obtenerDescripcion();
    }
}

class MoraDecorator extends DecoradorFactura {
    obtenerMonto() {
        return this.factura.obtenerMonto() + 20;
    }

    obtenerDescripcion() {
        return this.factura.obtenerDescripcion() + " + Recargo por Mora (20 Bs)";
    }
}

class DescuentoProntoPagoDecorator extends DecoradorFactura {
    obtenerMonto() {
        return this.factura.obtenerMonto() - 15;
    }

    obtenerDescripcion() {
        return this.factura.obtenerDescripcion() + " - Descuento Pago anticipado (15 Bs)";
    }
}


// 2. STRATEGY: Formas de cobro/pago
class PagoQRStrategy {
    pagar(monto) {
        console.log("Generando codigo QR por el monto de:", monto, "Bs.");
        console.log("Esperando confirmacion del banco...");
    }
}

class PagoTransferenciaStrategy {
    pagar(monto) {
        console.log("Solicitando transferencia por el monto de:", monto, "Bs.");
        console.log("Verificando comprobante...");
    }
}

class GestorCobranzaContext {
    constructor(estrategia) {
        this.estrategia = estrategia;
    }

    cambiarEstrategia(nuevaEstrategia) {
        this.estrategia = nuevaEstrategia;
    }

    procesarCobro(factura) {
        const total = factura.obtenerMonto();
        const detalle = factura.obtenerDescripcion();

        console.log("--------------------------------------------------");
        console.log("Detalle:", detalle);
        console.log("Monto Total:", total, "Bs.");
        
        this.estrategia.pagar(total);
        console.log("--------------------------------------------------\n");
    }
}
// 3. uso y fuson correpondiente

const facturaOriginal = new Factura(100);
const facturaConAgregados = new DescuentoProntoPagoDecorator(
    new MoraDecorator(facturaOriginal)
);

const gestor = new GestorCobranzaContext(new PagoQRStrategy());
console.log("FUSION DE PATRONES DECORATOR y STRATEGY\n");


gestor.procesarCobro(facturaConAgregados);
gestor.cambiarEstrategia(new PagoTransferenciaStrategy());
gestor.procesarCobro(facturaConAgregados);