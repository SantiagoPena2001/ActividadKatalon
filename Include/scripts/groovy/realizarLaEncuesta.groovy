import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords

import internal.GlobalVariable
import io.cucumber.datatable.DataTable
import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When


class realizarLaEncuesta {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("yo relleno la encuesta con los siguientes datos")
	def yo_relleno_la_encuesta_con_los_siguientes_datos(DataTable table){
		List<Map<String, String>> data = table.asMaps(String.class,String.class)
		WebUI.setText(findTestObject('Object Repository/txt_nombre'), data[0].nombre)
		WebUI.setText(findTestObject('Object Repository/txt_correo'), data[0].correo)
		WebUI.setText(findTestObject('Object Repository/txt_resumen'), data[0].resumen)
		WebUI.setText(findTestObject('Object Repository/txt_donde'), data[0].donde)
		WebUI.setText(findTestObject('Object Repository/txt_fecha'), data[0].fecha)
		WebUI.setText(findTestObject('Object Repository/txtArea_detalles'), data[0].detalles)
		WebUI.click(findTestObject('Object Repository/radioBtnPriority',['value': data[0].prioridad]))

		for(int i = 1; i <= 6; i++){
			if(WebUI.getText(findTestObject('Object Repository/spanRadioBtn', ['xpath': '//*[@id="mG61Hd"]/div/div[2]/div[2]/div[7]/div/div[2]/div/span/div/div['+i+']/label/div/div[2]/div/span']))=="Seguridad"){
				WebUI.comment("lo encontre")
				WebUI.comment('//*[@id="mG61Hd"]/div/div[2]/div[2]/div[7]/div/div[2]/div/span/div/div['+i+']/label/div/div[2]/div/span')
				WebUI.click(findTestObject('Object Repository/radioBtnTipo', ['xpath': '//*[@id="mG61Hd"]/div/div[2]/div[2]/div[7]/div/div[2]/div/span/div/div['+i+']/label/div/div[1]']))
				break;
			}
		}
		WebUI.click(findTestObject('Object Repository/btn_enviar'))
	}
	@Then("yo valido que envie el formulario")
	def yo_valido_que_envie_el_formulario(){
		WebUI.verifyTextPresent("Muchas Gracias por su solicitud", false)
	}
	@Then("yo cierro el navegador")
	def yo_cierro_el_navegador(){
		WebUI.closeBrowser()
	}
}