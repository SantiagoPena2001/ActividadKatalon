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
        "prioridad",
        "tipo"
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
        "\u003cprioridad\u003e",
        "\u003ctipo\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "yo valido que elegi seguridad y la prioridad que es \u003cprioridad\u003e",
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
        "prioridad",
        "tipo"
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
        "1",
        "Seguridad"
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
        "3",
        "Iluminación"
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
        "4",
        "Seguridad"
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
        "prioridad",
        "tipo"
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
        "1",
        "Seguridad"
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
  "name": "yo valido que elegi seguridad y la prioridad que es 1",
  "keyword": "Then "
});
formatter.match({
  "location": "realizarLaEncuesta.yo_valido_que_elegi_seguridad_y_la_priodidad_que_es(String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Escenario Exitoso");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.write("Escenario Exitoso");
formatter.after({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Cannot take screenshot\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.TakeScreenshotKeyword.takeScreenshot(TakeScreenshotKeyword.groovy:88)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.TakeScreenshotKeyword.execute(TakeScreenshotKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.takeScreenshot(WebUiBuiltInKeywords.groovy:2915)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$takeScreenshot$7.call(Unknown Source)\r\n\tat commoons.hooks.capturarPantalla(hooks.groovy:44)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:53)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure3.doCall(CucumberBuiltinKeywords.groovy:260)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure3.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:257)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat runner.run(runner:11)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:114)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1565294385340.run(TempTestCase1565294385340.groovy:21)\r\nCaused by: com.kms.katalon.core.webui.exception.BrowserNotOpenedException: Browser is not opened\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027QXCO481\u0027, ip: \u002710.125.13.227\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: unknown\r\n\tat com.kms.katalon.core.webui.driver.DriverFactory.verifyWebDriverIsOpen(DriverFactory.java:662)\r\n\tat com.kms.katalon.core.webui.driver.DriverFactory.verifyWebDriver(DriverFactory.java:647)\r\n\tat com.kms.katalon.core.webui.driver.DriverFactory.getWebDriver(DriverFactory.java:633)\r\n\tat com.kms.katalon.core.webui.util.FileUtil.takesScreenshot(FileUtil.java:27)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.TakeScreenshotKeyword$_takeScreenshot_closure1.doCall(TakeScreenshotKeyword.groovy:89)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.TakeScreenshotKeyword$_takeScreenshot_closure1.call(TakeScreenshotKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\t... 62 more\r\n",
  "status": "failed"
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
        "prioridad",
        "tipo"
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
        "3",
        "Iluminación"
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
  "name": "yo valido que elegi seguridad y la prioridad que es 3",
  "keyword": "Then "
});
formatter.match({
  "location": "realizarLaEncuesta.yo_valido_que_elegi_seguridad_y_la_priodidad_que_es(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to verify object \u0027Object Repository/validacion\u0027 is present\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1434)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$6.call(Unknown Source)\r\n\tat realizarLaEncuesta.yo_valido_que_elegi_seguridad_y_la_priodidad_que_es(realizarLaEncuesta.groovy:78)\r\n\tat ✽.yo valido que elegi seguridad y la prioridad que es 3(Include/features/encuesta.feature:13)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/validacion\u0027 located by \u0027By.xpath: //*[@role \u003d \u0027radiogroup\u0027 and @data-value \u003d \u0027Seguridad\u0027]\u0027 not found\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.doCall(VerifyElementPresentKeyword.groovy:85)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword$_verifyElementPresent_closure1.call(VerifyElementPresentKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.verifyElementPresent(VerifyElementPresentKeyword.groovy:92)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyElementPresentKeyword.execute(VerifyElementPresentKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyElementPresent(WebUiBuiltInKeywords.groovy:1434)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyElementPresent$6.call(Unknown Source)\r\n\tat realizarLaEncuesta.yo_valido_que_elegi_seguridad_y_la_priodidad_que_es(realizarLaEncuesta.groovy:78)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure3.doCall(CucumberBuiltinKeywords.groovy:260)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure3.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:257)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat runner.run(runner:11)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:114)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1565294385340.run(TempTestCase1565294385340.groovy:21)\r\n",
  "status": "failed"
});
formatter.write("Escenario fallido");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.write("Escenario fallido");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
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
        "prioridad",
        "tipo"
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
        "4",
        "Seguridad"
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
  "name": "yo valido que elegi seguridad y la prioridad que es 4",
  "keyword": "Then "
});
formatter.match({
  "location": "realizarLaEncuesta.yo_valido_que_elegi_seguridad_y_la_priodidad_que_es(String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Escenario Exitoso");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.write("Escenario Exitoso");
formatter.after({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Cannot take screenshot\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.TakeScreenshotKeyword.takeScreenshot(TakeScreenshotKeyword.groovy:88)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.TakeScreenshotKeyword.execute(TakeScreenshotKeyword.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.takeScreenshot(WebUiBuiltInKeywords.groovy:2915)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$takeScreenshot$7.call(Unknown Source)\r\n\tat commoons.hooks.capturarPantalla(hooks.groovy:44)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:53)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure3.doCall(CucumberBuiltinKeywords.groovy:260)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure3.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:257)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat runner.run(runner:11)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:114)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1565294385340.run(TempTestCase1565294385340.groovy:21)\r\nCaused by: com.kms.katalon.core.webui.exception.BrowserNotOpenedException: Browser is not opened\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027QXCO481\u0027, ip: \u002710.125.13.227\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: unknown\r\n\tat com.kms.katalon.core.webui.driver.DriverFactory.verifyWebDriverIsOpen(DriverFactory.java:662)\r\n\tat com.kms.katalon.core.webui.driver.DriverFactory.verifyWebDriver(DriverFactory.java:647)\r\n\tat com.kms.katalon.core.webui.driver.DriverFactory.getWebDriver(DriverFactory.java:633)\r\n\tat com.kms.katalon.core.webui.util.FileUtil.takesScreenshot(FileUtil.java:27)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.TakeScreenshotKeyword$_takeScreenshot_closure1.doCall(TakeScreenshotKeyword.groovy:89)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.TakeScreenshotKeyword$_takeScreenshot_closure1.call(TakeScreenshotKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\t... 62 more\r\n",
  "status": "failed"
});
});