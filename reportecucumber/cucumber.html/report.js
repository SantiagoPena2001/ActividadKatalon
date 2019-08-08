$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/encuesta.feature");
formatter.feature({
  "name": "Encuesta",
  "description": "  Yo realizo una encuesta en google de solicitud de servicio",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Encuesta"
    }
  ]
});
formatter.scenarioOutline({
  "name": "realizarEncuesta",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@realizarEncuesta"
    }
  ]
});
formatter.step({
  "name": "yo relleno la encuesta con los siguientes datos",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "nombre",
        "correo",
        "resumen",
        "donde",
        "fecha",
        "detalles",
        "prioridad"
      ]
    },
    {
      "cells": [
        "\u003cnombre\u003e",
        "\u003ccorreo\u003e",
        "\u003cresumen\u003e",
        "\u003cdonde\u003e",
        "\u003cfecha\u003e",
        "\u003cdetalles\u003e",
        "\u003cprioridad\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "yo valido que envie el formulario",
  "keyword": "Then "
});
formatter.step({
  "name": "yo cierro el navegador",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nombre",
        "correo",
        "resumen",
        "donde",
        "fecha",
        "detalles",
        "prioridad"
      ]
    },
    {
      "cells": [
        "santiago",
        "santiago@gmail.com",
        "hubo un problema de seguridad",
        "en mi casa",
        "19/12/2020",
        "fue algo muy feo",
        "1"
      ]
    },
    {
      "cells": [
        "cristian",
        "cristian@gmail.com",
        "tuve un problema de seguridad",
        "calle sur",
        "2/4/2021",
        "tuve mucho miedo y no hice nada",
        "3"
      ]
    },
    {
      "cells": [
        "kevin",
        "kevin@gmail.com",
        "me robaron",
        "calle 54 con avenida 20",
        "1/1/2020",
        "no estuve en casa",
        "4"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "yo me logeo con mi usuario santiago.pena@quipux.com y mi contraseña EVznDgI6UYaBchXZ1M8DJMlS22FHxCtr",
  "keyword": "Given "
});
formatter.match({
  "location": "login.yo_me_logeo_con_mi_usuario_y_mi_contraseña(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "realizarEncuesta",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Encuesta"
    },
    {
      "name": "@realizarEncuesta"
    }
  ]
});
formatter.step({
  "name": "yo relleno la encuesta con los siguientes datos",
  "rows": [
    {
      "cells": [
        "nombre",
        "correo",
        "resumen",
        "donde",
        "fecha",
        "detalles",
        "prioridad"
      ]
    },
    {
      "cells": [
        "santiago",
        "santiago@gmail.com",
        "hubo un problema de seguridad",
        "en mi casa",
        "19/12/2020",
        "fue algo muy feo",
        "1"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "realizarLaEncuesta.yo_relleno_la_encuesta_con_los_siguientes_datos(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "yo valido que envie el formulario",
  "keyword": "Then "
});
formatter.match({
  "location": "realizarLaEncuesta.yo_valido_que_envie_el_formulario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "yo cierro el navegador",
  "keyword": "Then "
});
formatter.match({
  "location": "realizarLaEncuesta.yo_cierro_el_navegador()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "yo me logeo con mi usuario santiago.pena@quipux.com y mi contraseña EVznDgI6UYaBchXZ1M8DJMlS22FHxCtr",
  "keyword": "Given "
});
formatter.match({
  "location": "login.yo_me_logeo_con_mi_usuario_y_mi_contraseña(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "realizarEncuesta",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Encuesta"
    },
    {
      "name": "@realizarEncuesta"
    }
  ]
});
formatter.step({
  "name": "yo relleno la encuesta con los siguientes datos",
  "rows": [
    {
      "cells": [
        "nombre",
        "correo",
        "resumen",
        "donde",
        "fecha",
        "detalles",
        "prioridad"
      ]
    },
    {
      "cells": [
        "cristian",
        "cristian@gmail.com",
        "tuve un problema de seguridad",
        "calle sur",
        "2/4/2021",
        "tuve mucho miedo y no hice nada",
        "3"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "realizarLaEncuesta.yo_relleno_la_encuesta_con_los_siguientes_datos(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "yo valido que envie el formulario",
  "keyword": "Then "
});
formatter.match({
  "location": "realizarLaEncuesta.yo_valido_que_envie_el_formulario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "yo cierro el navegador",
  "keyword": "Then "
});
formatter.match({
  "location": "realizarLaEncuesta.yo_cierro_el_navegador()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "yo me logeo con mi usuario santiago.pena@quipux.com y mi contraseña EVznDgI6UYaBchXZ1M8DJMlS22FHxCtr",
  "keyword": "Given "
});
formatter.match({
  "location": "login.yo_me_logeo_con_mi_usuario_y_mi_contraseña(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "realizarEncuesta",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Encuesta"
    },
    {
      "name": "@realizarEncuesta"
    }
  ]
});
formatter.step({
  "name": "yo relleno la encuesta con los siguientes datos",
  "rows": [
    {
      "cells": [
        "nombre",
        "correo",
        "resumen",
        "donde",
        "fecha",
        "detalles",
        "prioridad"
      ]
    },
    {
      "cells": [
        "kevin",
        "kevin@gmail.com",
        "me robaron",
        "calle 54 con avenida 20",
        "1/1/2020",
        "no estuve en casa",
        "4"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "realizarLaEncuesta.yo_relleno_la_encuesta_con_los_siguientes_datos(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "yo valido que envie el formulario",
  "keyword": "Then "
});
formatter.match({
  "location": "realizarLaEncuesta.yo_valido_que_envie_el_formulario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "yo cierro el navegador",
  "keyword": "Then "
});
formatter.match({
  "location": "realizarLaEncuesta.yo_cierro_el_navegador()"
});
formatter.result({
  "status": "passed"
});
});