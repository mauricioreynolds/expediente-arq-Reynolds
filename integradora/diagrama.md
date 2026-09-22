# Parte 1 El plano 
Estudiante: Mauricio Ivan Reynolds Ribera

```mermaid
classDiagram
    class Estadia {
        -string placa
        -string tipoVehiculo
        -int horas
        -string estado
        +calcularMonto() decimal
        +cambiarEstado(nuevoEstado: string) void
    }

    class Portero {
        +registrarEntrada(placa: string, tipo: string) Estadia
        +registrarSalida(placa: string, horas: int) void
    }

    class Administrador {
        +ajustarTarifas() void
        +anularEstadia(estadia: Estadia) void
        +generarReporteIngresos() void
    }

    class NotificadorAviso {
        +verificarTiempoExcedido(estadia: Estadia) void
        +notificarDuenio(placa: string) void
    }

    Portero ..> Estadia : gestiona
    Administrador ..> Estadia : administra
    NotificadorAviso ..> Estadia : monitorea 24h