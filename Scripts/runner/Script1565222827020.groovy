import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import commonRunner.encuestaRunner as encuestaRunner

import utils.Dates
def inicio = Dates.getTimeStampSpanish()

CucumberKW.runWithCucumberRunner(encuestaRunner.class,  FailureHandling.CONTINUE_ON_FAILURE)
WebUI.openBrowser('C:\\Users\\santiago.pena\\Downloads\\ActividadKatalon-master\\reportecucumber\\cucumber.html\\index.html')

WebUI.maximizeWindow()

CustomKeywords.'utils.Reportes.generarReporte'('C:\\Users\\santiago.pena\\Downloads\\ActividadKatalon-master\\reportecucumber', './reportecucumber/cucumber-statics' , inicio, Dates.getTimeStampSpanish(),'QUIPUX CAPACITACION')