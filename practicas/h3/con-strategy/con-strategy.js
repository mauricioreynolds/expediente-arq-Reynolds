class MoraRegularStrategy {
    calcularMora(monto) {
        return monto * 0.10;
    }
}
class MoraSocioVipStrategy {
    calcularMora(monto) {
        return monto * 0.05;
    }
}
class MoraCastigoStrategy {
    calcularMora(monto) {
        return monto * 0.20;
    }
}
class GestorCobranzaContext {
    constructor(estrategia) {
        this.estrategia = estrategia;
    }

    cambiarEstrategia(nuevaEstrategia) {
        this.estrategia = nuevaEstrategia;
    }

    calcularTotalCobro(montoBase) {
        const mora = this.estrategia.calcularMora(montoBase);
        return montoBase + mora;
    }
}
const estrategiaRegular = new MoraRegularStrategy();
const estrategiaVip = new MoraSocioVipStrategy();
const estrategiaCastigo = new MoraCastigoStrategy();
const gestor = new GestorCobranzaContext(estrategiaRegular);


console.log("Cliente con mora 'Regular' - Total a pagar:", gestor.calcularTotalCobro(100), "Bs.");

gestor.cambiarEstrategia(estrategiaVip);
console.log("Cliente con mora 'VIP' - Total a pagar:", gestor.calcularTotalCobro(100), "Bs.");

gestor.cambiarEstrategia(estrategiaCastigo);
console.log("Cliente con mora 'Reincidente' - Total a pagar:", gestor.calcularTotalCobro(100), "Bs.");