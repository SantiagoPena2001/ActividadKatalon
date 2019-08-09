package tabla
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
class rellenarYVerificarTabla {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("yo relleno la tabla con los siguientes datos")
	def yo_relleno_la_tabla_con_los_siguientes_datos(){
		WebUI.openBrowser("")
		WebUI.navigateToUrl("https://editor.datatables.net/examples/advanced/upload-many.html")
		WebUI.maximizeWindow()
		WebUI.click(findTestObject('Object Repository/tabla/btn_new'))
		WebUI.setText(findTestObject('Object Repository/tabla/txt_firstname'), "juan")
		WebUI.setText(findTestObject('Object Repository/tabla/txt_lastname'), "benitez gutierrez")
		WebUI.setText(findTestObject('Object Repository/tabla/txt_phone'), "123456")
		WebUI.selectOptionByLabel(findTestObject('Object Repository/tabla/select_site'), "Los Angeles", false)
		WebUI.uploadFile(findTestObject('Object Repository/tabla/input_image'), 'C:\\Users\\Asus\\Desktop\\descarga.jpg')
		WebUI.click(findTestObject('Object Repository/tabla/btn_crear'))

	}

	@Then("yo verifico que rellene la tabla")
	def yo_verifico_que_rellene_la_tabla() {
		def encontro = false
		while(encontro==false){
			if(WebUI.verifyElementPresent(findTestObject('Object Repository/tabla/validacion', ['valor':"juan"]), 0,FailureHandling.CONTINUE_ON_FAILURE) && WebUI.verifyElementPresent(findTestObject('Object Repository/tabla/validacion', ['valor':"benitez gutierrez"]), 0,FailureHandling.CONTINUE_ON_FAILURE) && WebUI.verifyElementPresent(findTestObject('Object Repository/tabla/validacion', ['valor':"123456"]), 0,FailureHandling.CONTINUE_ON_FAILURE) && WebUI.verifyElementPresent(findTestObject('Object Repository/tabla/validacion', ['valor':"Los Angeles"]), 0,FailureHandling.CONTINUE_ON_FAILURE)){
				encontro =true
				WebUI.click(findTestObject('Object Repository/tabla/table', ['valor': "juan"]))
				WebUI.click(findTestObject('Object Repository/tabla/btn_edit'))
				WebUI.delay(1)
			}else{
				WebUI.click(findTestObject('Object Repository/tabla/btn_next'))
				WebUI.delay(1)
			}
		}
	}
}