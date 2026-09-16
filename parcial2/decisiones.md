### Situación 1: Patrón Observer
* **Patrón elegido:** Observer.
* **Justificación:** El módulo de préstamos actúa como Sujeto emitiendo el evento "Préstamo Vencido". Sin este patrón, se viola el principio Open/Closed o Abierto/Cerrado porque cada vez que el municipio agregue un nuevo interesado (como el sistema de multas), hay que acoplar y modificar directamente el código del módulo de préstamos. Al aplicar Observer, nos permite suscribir o desuscribir nuevos interesados sin tocar la lógica que ya se tieen.

### Situación 2: Patrón Strategy
* **Patrón elegido:** Strategy.
* **Justificación:** Encapsula las reglas del cálculo de multas (Infantil, Adulto, Tercera Edad) en clases de estrategias independientes e intercambiables. Sin este patrón, el cálculo de multas queda atrapado en condicionales `if/else` duplicados entre el módulo de préstamos y el de reportes, obligando a cambiar y duplicar código en múltiples lugares cada año cuando el concejo municipal cambie las reglas. Y eso estaría totalmente mal segun lo que se explicó en clases.

### Situación 3: Patrón Adapter
* **Patrón elegido:** Adapter.
* **Justificación:** Actua como un traductor entre el dominio interno de la biblioteca y el servicio externo del Sistema Estatal de Bibliotecas (`PushRecord`). Sin este patrón, el sistema tendría que acoplarse diretamente a formatos en inglés y estructuras de fechas externas sin poder ser modificables. Si el serviciio externo cambia de versión, el cambio se aísla únicamente dentro del adaptador sin romperse.


## P2.3 Conexión SOLID (Para la Situación 2 - Strategy)

* **Principio SOLID rescatado:** Principio de Abierto/Cerrado (Open/Closed Principle) y Principio de Responsabilidad Única (Single Responsibility Principle).
* **Demostración en código:** En `solucion.js`, el `GestorMultasContext`que es la clase en la linea de codigo numoer 28, está cerrado a modificaciones pero abierto a extensiones.
Si el concejo municipal crea una nueva regla de multa, no modificamos el contexto ni los `if/else` existentes, simplemente creamos una nueva clase que calcule la multa y se la pasamos al contexto en la linea donde usamos `calcularMultaTotal()` en la line de codgio 38, pero se ejcuta en la linea de codigo numeor 39 `return this.estrategia.calcularMulta(diasAtraso);`. Ademas que se tiene que cada estrategia tiene la única responsabilidad de calcular su tarifa correspondiente.