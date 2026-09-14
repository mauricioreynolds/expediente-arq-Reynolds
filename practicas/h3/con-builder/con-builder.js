class PlanCobranza {
    constructor() {
        this.montoTotal = 0;
        this.numeroCuotas = 0;
        this.porcentajeMora = 0;
    }
}

class PlanCobranzaBuilder {
    constructor() {
        this._plan = new PlanCobranza();
    }

    establecerMontoBase(monto) {
        this._plan.montoTotal = monto;
        return this;
    }

    configurarCuotas(cuotas) {
        this._plan.numeroCuotas = cuotas;
        return this;
    }

    definirRecargoMora(porcentaje) {
        this._plan.porcentajeMora = porcentaje;
        return this;
    }

    build() {
        if (this._plan.montoTotal <= 0) {
            throw new Error("El monto debe ser mayor a 0.");
        }

        if (this._plan.numeroCuotas < 1) {
            throw new Error("Debe tener al menos 1 cuota.");
        }

        return this._plan;
    }
}
const builder = new PlanCobranzaBuilder();
const miPlan = builder
    .establecerMontoBase(500)
    .configurarCuotas(5)
    .definirRecargoMora(0.10)
    .build();

console.log("Plan de cobranza creado con éxito:", miPlan);