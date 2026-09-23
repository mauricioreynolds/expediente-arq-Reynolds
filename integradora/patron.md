# Selección de Patrón de Diseño

**Requerimiento del parqueo:**
"Cuando un vehículo lleva más de 24 horas, el dueño debe recibir un aviso".

**Patrón Aplicado:** **Observer**

**Por qué ese?:** Porque permite enviar alertas de estadía prolongada (>24h) desacoplando la lógica de detección del canal de mensajería (WhatsApp, Correo, etc.)

**Que pasa sin el:** El código del parqueo quedaría acoplado directamente a clases concretas como WhatsAppDelEdificio. Si el día de mañana la administración pide cambiar el canal de aviso o agregar correo/SMS, habría que modificar y romper el código del parqueo cada vez.


```javascript
class SujetoEstadia {
    constructor() {
        this.observadores = [];
    }

    agregarObservador(obs) {
        this.observadores.push(obs);
    }

    notificar(placa, horas) {
        this.observadores.forEach(obs => obs.actualizar(placa, horas));
    }
}

class ObservadorWhatsApp {
    actualizar(placa, horas) {
        if (horas > 24) {
            console.log(`[WHATSAPP] 📱 Alerta: El vehículo ${placa} superó las 24 horas (${horas}h).`);
        }
    }
}

class ObservadorCorreo {
    actualizar(placa, horas) {
        if (horas > 24) {
            console.log(`[CORREO] 📧 Notificación enviada al dueño de la placa ${placa}.`);
        }
    }
}