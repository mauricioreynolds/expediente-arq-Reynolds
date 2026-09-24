
# 5. Los 2 atributos de calidad críticos de TU variante.

<h4>Atributos Críticos Priorizados: Idoneidad Funcional y Seguridad.<h4/>
  
Para este sistema elegí la Idoneidad Funcional porque el cálculo de la mora debe ser exacto; un error en la fórmula significa cobrarle un monto equivocado a personas reales. <br/>
Por otro lado, la Seguridad es imprescindible para evitar que los enlaces de pago sean alterados o manipulados por los usuarios para modificar el precio.
<br/>
<h4>Atributos Que Se Sacrifican: Usabilidad y Portabilidad<h4/><br/>
Sacrificamos la Usabilidad añadiendo pasos extra de confirmación antes de emitir un enlace para evitar errores humanos, <br/>
y sacrificamos la Portabilidad enfocándonos únicamente en que el sistema funcione bien en la web del operador antes de adaptarlo a múltiples plataformas.

# Clase Gorda.
<img width="1085" height="281" alt="Captura de pantalla 2026-08-31 210801" src="https://github.com/user-attachments/assets/871a4dcf-627f-4939-9f08-0015017a3627" />


# Herencia Mentirosa.

El Antes  <br/>
<img width="915" height="498" alt="Captura de pantalla 2026-09-01 202150" src="https://github.com/user-attachments/assets/be221bbf-af9c-4666-b0c7-267504418866" /><br/>

El Después  <br/>

<img width="938" height="563" alt="Captura de pantalla 2026-09-01 210536" src="https://github.com/user-attachments/assets/a126092d-d4a2-477e-9757-0f101d9707ad" />

# Contratos De Roles.
<img width="930" height="568" alt="Captura de pantalla 2026-09-01 215928" src="https://github.com/user-attachments/assets/3002fe28-c067-4198-9ac9-b9fd2043a17a" />


# New Peligrosos.
<img width="625" height="658" alt="Captura de pantalla 2026-09-03 203046" src="https://github.com/user-attachments/assets/4291a85f-b694-47a0-94e4-5706497f5936" />

# Diagrama Antes Y Después.
Antes <br/>

<img width="755" height="665" alt="Captura de pantalla 2026-09-03 214013" src="https://github.com/user-attachments/assets/3f71ce97-8db4-482f-9092-eb5b7101939b" /> <br/>

Después <br/>

<img width="1251" height="585" alt="Captura de pantalla 2026-09-03 214037" src="https://github.com/user-attachments/assets/5e3c4396-c659-4182-b3fb-2b13956cd3a1" /><br/>

Separé la clase gorda GestorCobranza en varias partes pequeñas para que una sola clase no haga todo el trabajo junta (SRP).

Saqué el cálculo de recargos de la clase padre y creé la interfaz IMorable para que las cuotas en promoción no den error al no cobrar mora (LSP).

Dividí las funciones en dos interfaces separadas (IGeneradorEnlace y ICondonadorMora) para que un operador no tenga funciones de supervisor que no puede usar (ISP).

Hice que el gestor dependa de la interfaz IRepositorioCuota en vez de conectarse directo a SQL, así puedo hacer pruebas sin la base de datos real (DIP).
