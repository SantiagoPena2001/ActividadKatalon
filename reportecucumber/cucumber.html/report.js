$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/tabla.feature");
formatter.feature({
  "name": "Tabla",
  "description": "  Yo como usuario quiero rellenar la tabla",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "rellenar y verificar la tabla",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "yo relleno la tabla con los siguientes datos",
  "keyword": "Given "
});
formatter.step({
  "name": "yo verifico que rellene la tabla",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ]
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "rellenar y verificar la tabla",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "yo relleno la tabla con los siguientes datos",
  "keyword": "Given "
});
formatter.match({
  "location": "rellenarYVerificarTabla.yo_relleno_la_tabla_con_los_siguientes_datos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "yo verifico que rellene la tabla",
  "keyword": "Then "
});
formatter.match({
  "location": "rellenarYVerificarTabla.yo_verifico_que_rellene_la_tabla()"
});
formatter.result({
  "status": "passed"
});
formatter.write("Escenario Exitoso");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});