using System;

namespace Parcial1.Ferreteria
{
    // Cura 1: Aplicamos ISP dividiendo la interfaz original en capacidades específicas.

    public interface IEmpleadoBasico
    {
        void RegistrarPedido(string material, int cantidad);
    }

    public interface IAdministradorFerreteria
    {
        void AutorizarVentaAlPorMayor(string material);
        void AjustarPrecio(string material, decimal nuevoPrecio);
        void VerReporteDeCompras();
    }

    // Refactor: Mauricio Ivan Reynolds Ribera
    public class Vendedor : IEmpleadoBasico
    {
        public void RegistrarPedido(string material, int cantidad)
        {
            Console.WriteLine($"[VEND] Pedido: {cantidad} x {material}");
        }
    }

    // Refactor: Mauricio Ivan Reynolds Ribera
    public class Encargado : IEmpleadoBasico, IAdministradorFerreteria
    {
        public void RegistrarPedido(string material, int cantidad)
        {
            Console.WriteLine($"[ENC] Pedido: {cantidad} x {material}");
        }

        public void AutorizarVentaAlPorMayor(string material)
        {
            Console.WriteLine($"[ENC] Venta al por mayor de {material} autorizada");
        }

        public void AjustarPrecio(string material, decimal nuevoPrecio)
        {
            Console.WriteLine($"[ENC] {material} ahora cuesta {nuevoPrecio:0.00} Bs");
        }

        public void VerReporteDeCompras()
        {
            Console.WriteLine("[ENC] Reporte de compras del mes");
        }
    }

    // Cura 2: Aplicamos DIP creando un contrato abstracto para la persistencia.

    public interface IBaseDeDatos
    {
        void GuardarPedido(string cliente, string material, int cantidad, decimal total);
    }

    public class BaseDeDatosMySql : IBaseDeDatos
    {
        public void GuardarPedido(string cliente, string material, int cantidad, decimal total)
        {
            Console.WriteLine($"[MYSQL] INSERT INTO pedidos VALUES ('{cliente}', '{material}', {cantidad}, {total})");
        }
    }
    // Refactor: Mauricio Ivan Reynolds Ribera
    public class GestorDePedidos
    {
        private readonly IBaseDeDatos _baseDeDatos;

        // Refactor: Mauricio Ivan Reynolds Ribera
        public GestorDePedidos(IBaseDeDatos baseDeDatos)
        {
            _baseDeDatos = baseDeDatos;
        }

        public void ProcesarPedido(string cliente, string tipoCliente, string material, int cantidad, decimal precioUnitario)
        {
            decimal total = cantidad * precioUnitario;
            
            // Guardado desacoplado mediante la interfaz contratada
            _baseDeDatos.GuardarPedido(cliente, material, cantidad, total);
        }
    }
}