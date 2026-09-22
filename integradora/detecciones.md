# Detección de Violaciones

1. **Principio de Responsabilidad Única (SRP):**
   - **Dónde:** En la clase "GestorDeEstadias", método "RegistrarSalida".
   - **Por qué:** La clase tiene demasiadas responsabilidades a la vez: calcula la tarifa, guarda en base de datos, imprime el ticket y envía la notificación por WhatsApp. Si cambia la base de datos o la notificación, hay que modificar esta clase.

2. **Principio Abierto/Cerrado (OCP):**
   - **Dónde:** En el "switch (tipoVehiculo)" dentro de "RegistrarSalida".
   - **Por qué:** Si el parqueo agrega un nuevo tipo de vehículo (por ejemplo, "camioneta"), estamos obligados a modificar el código fuente del "switch" existente en lugar de extender el comportamiento.

3. **Principio de Inversión de Dependencias (DIP):**
   - **Dónde:** Al hacer "new BaseDeDatosParqueo()" y "new WhatsAppDelEdificio()" dentro de "RegistrarSalida".
   - **Por qué:** La clase de alto nivel "GestorDeEstadias" depende directamente de clases concretas de bajo nivel en lugar de depender de abstracciones o interfaces.