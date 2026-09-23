// Refactor: Mauricio Ivan Reynolds Ribera

class TarifaAuto {
    obtenerTarifaPorHora() {
        return 5;
    }
}

class TarifaMoto {
    obtenerTarifaPorHora() {
        return 3;
    }
}

class TarifaResidente {
    obtenerTarifaPorHora() {
        return 1;
    }
}

class CalculadorDeTarifas {
    constructor() {
        this.tarifas = {
            "auto": new TarifaAuto(),
            "moto": new TarifaMoto(),
            "residente": new TarifaResidente()
        };
    }

    obtenerTarifa(tipoVehiculo) {
        let tipo = tipoVehiculo.toLowerCase();
        if (this.tarifas[tipo]) {
            return this.tarifas[tipo].obtenerTarifaPorHora();
        }
        return 5;
    }
}

class BaseDeDatosParqueo {
    guardarEstadia(placa, tipo, horas, total) {
        console.log(`[BD] INSERT INTO estadias VALUES ('${placa}', '${tipo}', ${horas}, ${total})`);
    }
}

class WhatsAppDelEdificio {
    enviar(mensaje) {
        console.log(`[WHATSAPP] 📱 ${mensaje}`);
    }
}

class GestorDeEstadias {
    constructor() {
        this.calculador = new CalculadorDeTarifas();
        this.baseDeDatos = new BaseDeDatosParqueo();
        this.whatsapp = new WhatsAppDelEdificio();
    }

    registrarSalida(placa, tipoVehiculo, horas) {
        let tarifaPorHora = this.calculador.obtenerTarifa(tipoVehiculo);
        let total = tarifaPorHora * horas;

        this.baseDeDatos.guardarEstadia(placa, tipoVehiculo, horas, total);

        console.log("----- TICKET DE SALIDA -----");
        console.log(`Placa ${placa}: ${horas} h como ${tipoVehiculo}`);
        console.log(`TOTAL: ${total.toFixed(2)} Bs`);

        this.whatsapp.enviar(`Salida registrada: ${placa}, ${horas} h, ${total.toFixed(2)} Bs`);
    }
}

class Demo {
    static correr() {
        let gestor = new GestorDeEstadias();
        gestor.registrarSalida("1234-ABC", "auto", 3);
    }
}

 Demo.correr(); // ingieniro se hizo correr el codigo y ver que etsa funcional.