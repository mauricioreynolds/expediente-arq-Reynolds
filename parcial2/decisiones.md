### Situación 1: Patrón Observer
* **Patrón elegido:** Observer.
* **Justificación:** El módulo de préstamos actúa como Sujeto emitiendo el evento "Préstamo Vencido". Sin este patrón, se viola el principio Open/Closed o Abierto/Cerrado porque cada vez que el municipio agregue un nuevo interesado (como el sistema de multas), hay que acoplar y modificar directamente el código del módulo de préstamos. Al aplicar Observer, nos permite suscribir o desuscribir nuevos interesados sin tocar la lógica que ya se tieen.

### Situación 2: Patrón Strategy
* **Patrón elegido:** Strategy.
* **Justificación:** Encapsula las reglas del cálculo de multas (Infantil, Adulto, Tercera Edad) en clases de estrategias independientes e intercambiables. Sin este patrón, el cálculo de multas queda atrapado en condicionales `if/else` duplicados entre el módulo de préstamos y el de reportes, obligando a cambiar y duplicar código en múltiples lugares cada año cuando el concejo municipal cambie las reglas. Y eso estaría totalmente mal segun lo que se explicó en clases.

