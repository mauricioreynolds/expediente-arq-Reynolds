class PasarelaPagoExterna {
    executeTransaction(token, amountInCents) {
        console.log(`[EXTERNO] Cobro efectuado: ${amountInCents} centavos con token ${token}.`);
        return true;
    }
}

class PasarelaPagoAdapter {
    constructor() {
        this._externo = new PasarelaPagoExterna();
    }

    cobrarCuota(montoBs) {
        const centavos = Math.round(montoBs * 100);
        return this._externo.executeTransaction("TOKEN-123", centavos);
    }
}

const adaptador = new PasarelaPagoAdapter();
adaptador.cobrarCuota(150.50);