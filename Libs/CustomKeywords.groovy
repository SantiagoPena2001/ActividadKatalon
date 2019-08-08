
/**
 * This class is generated automatically by Katalon Studio and should not be modified or deleted.
 */

import java.lang.String

import cucumber.api.Scenario


def static "utils.Imagenes.getFilePath"(
    	String nombre	) {
    (new utils.Imagenes()).getFilePath(
        	nombre)
}

def static "utils.CapturaPantalla.capturarPantalla"(
    	Scenario scenario	) {
    (new utils.CapturaPantalla()).capturarPantalla(
        	scenario)
}

def static "utils.Reportes.generarReporte"(
    	String jsonDir	
     , 	String repPath	
     , 	String timeIni	
     , 	String timeFin	
     , 	Object titulo	) {
    (new utils.Reportes()).generarReporte(
        	jsonDir
         , 	repPath
         , 	timeIni
         , 	timeFin
         , 	titulo)
}

def static "utils.Dates.getFechaActual"(
    	int dia	) {
    (new utils.Dates()).getFechaActual(
        	dia)
}

def static "utils.Dates.getTimeStamp"() {
    (new utils.Dates()).getTimeStamp()
}

def static "utils.Dates.getTimeStampSpanish"() {
    (new utils.Dates()).getTimeStampSpanish()
}

def static "utils.Dates.convertirHora"(
    	String arg	) {
    (new utils.Dates()).convertirHora(
        	arg)
}
