# Detección de Violaciones SOLID - Parcial 1

| Principio Violado | Dónde vive (Clase y Método) | Por qué es una violación |
| :--- | :--- | :--- |
| **ISP** | Interfaz `IEmpleadoDeFerreteria` | Obliga a la clase `Vendedor` a implementar métodos como `AjustarPrecio()` que no usa y que terminan lanzando un `NotSupportedException`. |
| **SRP** | Clase `GestorDePedidos`, método `ProcesarPedido` | Tiene demasiadas responsabilidades juntas: calcula descuentos, guarda en base de datos, imprime el comprobante y envía el correo. |
| **OCP** | Clase `GestorDePedidos`, método `ProcesarPedido` | Usa un `switch(tipoCliente)` para calcular descuentos; si se añade un nuevo tipo de cliente, hay que modificar el código de la clase. |
| **DIP** | Clase `GestorDePedidos`, método `ProcesarPedido` | Depende directamente de clases concretas mediante `new BaseDeDatosMySql()` y `new CorreoSmtp()` en lugar de abstraerse con interfaces. |