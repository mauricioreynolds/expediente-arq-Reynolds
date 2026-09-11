# Justificación de Arquitectura: Patrón Singleton

Para nuestro dominio de **Gestión de Cobranzas**, **No justificamos la implementación del patrón Singleton**.

# Argumentos:
**Problemas con Estado Concurrente:** El módulo de cobranza procesa transacciones simultáneas de múltiples clientes. Un Singleton global mantendría un estado único en memoria que puede causar colisiones de datos.
**Dificultad para Pruebas Unitarias:** Dificulta de pruebas para verificar transacciones sin afectar la base de datos real.
**Alternativa Recomendada:** Es preferible gestionar el ciclo de vida creando instancias independientes.