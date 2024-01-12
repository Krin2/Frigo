# Central de tratamiento de aire

## Generalidades
Este proyecto pretende recrear una visualizacion web de una instalación industrial existente en un formato tipo SCADA.

Tanto los gráficos como las variables de medición corresponden a datos reales de la instalación.

Las variables de medición estan simuladas de forma manual mediante los controles que hay debajo de la instalacion.

## Funcionamiento de la instalación

### CTA 300
Esta instalación debe generar aire suficiente para mantener las salas presurizadas de tal forma que exista una preesion mayor en la sala de produccion y un poco menor en las salas secundarias para evitar el ingreso de polvo en la instalacion.

El control de temperatura y humedad se hace en las salas principales, aunque se mide igualmente en la sala de vestuario.

La instalación esta compuesta por:
***Forzadores***: Consta de una serie de forzadores de aire los cuales sirven para presurizar la sala a controlar.

**Filtros**: Cuenta con 3 capas de filtros para eliminar el polvo que se envia a la instalacion manteniendo la higiene de la misma.

**Circuito de refrigeracion y de calefaccion**: Se usan para regular tanto la temperatura como la humedad de la sala a controlar.

**Rejas**: La reja R1 controlada de forma automatica o manual, permite la incorporacion de aire externo a la sala ayudando a la presurizacion de la sala.

Las rejas de cada sala permiten regular la entrada de aire en la sala de forma manual.

### CTA 100
Esta sala esta atemperatura elevada por lo que la instalacion busca presurizar la sala para evitar el ingreso de polvo y disminuir la temperatura.

La instalación esta compuesta por:
***Forzadores***: Consta de un solo forzador de aire el cual sirve para presurizar la sala a controlar.

**Filtros**: Cuenta con 2 capas de filtros para eliminar el polvo que se envia a la instalacion manteniendo la higiene de la misma.

**Circuito de refrigeracion**: Se usan para regular la temperatura de la sala a controlar.

**Rejas**: La reja R1 controlada de forma manual, permite la incorporacion de aire externo a la sala ayudando a la presurizacion de la sala.

### UTA
Esta instalacion secundaria esta destinada únicamnete a la presurizacion de las salas, ayudando a las CTAs anteriores

La instalación esta compuesta por:
***Forzadores***: Consta de 4 grupos de 2 forzadores de aire para el ingreso de aire a las salas y de 6 forzadores individuales para extraer aire de las mismas.

**Filtros**: cada unidad cuenta con un filtro.

**Rejas**: las rejas de cada unidad permiten la regulacion de aire de forma automatica o manual dependiendo de la presion diferencial detectada

### Simulacion
TODO: la idea es crear una simulacion de la instalacion en base a los valores medidos. Esto sera realizado en un futuro

## Visualizacion:
**Forzadores**:
- Al estar apagados quedan quietos y de color gris. Cuanto estan encendidos estan de color verde y con las aspas en movimiento.
- la velocidad del forzador se ve reflejada en la velocidad de giro de las aspas.

**Filtro**
- Los filtros cambian de color en base a si estan sucios o no.

**Circuito de refrigeración**:
- se visualiza en color celeste cuando esta encendido.

**Circuito de calefacción**:
- se visualiza en color rojo cuando esta encendido.

**Rejas**:
- la apertura de las rejas es visible como un grupo de lineas que se abren o cierran segun el porcentaje de apertura (0° a 90°)

**Instrumentos**:
- Las mediciones de cada instrumento se visualizan en cuadros verde con los nombres de los instrumentos, el valor medido (simulado) y las unidades en las cuales se esta midiendo.

**Controles**
- Cada forzador posee un boton de encendido, otro de apagado y una barra para modificar la velocidad del mismo.
- EL circuito de calefaccion y el de refrigeracion solo poseen control de encendido y apagado.
- el resto de los controles poseen una barra para modificar su valor desde el 0% hasta el 100% del rango del mismo.