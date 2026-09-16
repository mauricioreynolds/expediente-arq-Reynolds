class FacturaBase {
    constructor(montoBase) {
        this.montoBase = montoBase;
    }

    obtenerMonto() {
        return this.montoBase;
    }

    obtenerDescripcion() {
        return "Factura Base de Cobranza";
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

class RecargoMoraDecorator extends DecoradorFactura {
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
        return this.factura.obtenerDescripcion() + " - Descuento Pronto Pago (15 Bs)";
    }
}

const facturaSimple = new FacturaBase(100);

const combo1 = new RecargoMoraDecorator(facturaSimple);
console.log("COMBINACION 1 (Con Mora):");
console.log("Descripcion:", combo1.obtenerDescripcion());
console.log("Total:", combo1.obtenerMonto(), "Bs.\n");

const combo2 = new DescuentoProntoPagoDecorator(
    new RecargoMoraDecorator(
        new FacturaBase(100)
    )
);

console.log("COMBINACION 2 (Anidada: Mora + Descuento):");
console.log("Descripcion:", combo2.obtenerDescripcion());
console.log("Total:", combo2.obtenerMonto(), "Bs.");