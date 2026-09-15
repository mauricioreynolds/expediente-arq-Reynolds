# Decisiones de Arquitectura - Parcial 2 (Variante A)

### Situación 1: Patrón Observer
* **Patrón elegido:** Observer.
* **Justificación:** El módulo de préstamos actúa como Sujeto emitiendo el evento "Préstamo Vencido". Sin este patrón, se viola el principio Open/Closed porque cada vez que el municipio agregue un nuevo interesado (como el sistema de multas), hay que acoplar y modificar directamente el código del módulo de préstamos. Al aplicar Observer, nos permite suscribir o desuscribir nuevos interesados sin tocar la lógica que ya se tieen.

