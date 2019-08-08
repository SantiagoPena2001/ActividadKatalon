@Encuesta
Feature: Encuesta
  Yo realizo una encuesta en google de solicitud de servicio

  Background: Login
    Given yo me logeo con mi usuario santiago.pena@quipux.com y mi contraseña EVznDgI6UYaBchXZ1M8DJMlS22FHxCtr

  @realizarEncuesta
  Scenario Outline: realizarEncuesta
    Given yo relleno la encuesta con los siguientes datos
      | nombre   | correo   | resumen   | donde   | fecha   | detalles   | prioridad   |tipo|
      | <nombre> | <correo> | <resumen> | <donde> | <fecha> | <detalles> | <prioridad> |<tipo>|
    Then yo valido que elegi seguridad y la prioridad que es <prioridad>

    Examples: 
      | nombre   | correo             | resumen                       | donde                   | fecha      | detalles                        | prioridad |tipo|
      | santiago | santiago@gmail.com | hubo un problema de seguridad | en mi casa              | 19/12/2020 | fue algo muy feo                |         1 |Seguridad|
      | cristian | cristian@gmail.com | tuve un problema de seguridad | calle sur               | 2/4/2021   | tuve mucho miedo y no hice nada |         3 |Iluminación|
      | kevin    | kevin@gmail.com    | me robaron                    | calle 54 con avenida 20 | 1/1/2020   | no estuve en casa               |         4 |Seguridad|
