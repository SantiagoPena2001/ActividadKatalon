package commonRunner
import java.awt.Desktop
import java.awt.image.BufferedImage
import java.nio.file.DirectoryNotEmptyException
import java.nio.file.Files
import java.nio.file.NoSuchFileException
import java.nio.file.Paths
import java.io.File
import java.io.IOException
import javax.imageio.ImageIO

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import cucumber.api.Scenario
import cucumber.api.java.After
import internal.GlobalVariable


class hooks {


	@After ()
	def capturarPantalla(Scenario scenario) {
		//scenario.write("Escenario completado")
		if (scenario.isFailed()) {
			try {
				scenario.write("Escenario fallido")
				WebUI.delay(15)
				WebUI.executeJavaScript("document.body.style.zoom='80%'", null)
				BufferedImage screenshot = ImageIO.read(new File(WebUI.takeScreenshot()))
				ByteArrayOutputStream baos = new ByteArrayOutputStream();
				ImageIO.write( screenshot, "png", baos );
				baos.flush();
				byte[] imageInByte = baos.toByteArray();
				baos.close();
				scenario.embed(imageInByte, "image/png")
				generarReporte()
			} catch (IOException e) {
			}
		}
		else {
			scenario.write("Escenario Exitoso")
			BufferedImage screenshot = ImageIO.read(new File(WebUI.takeScreenshot()))
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			ImageIO.write( screenshot, "png", baos );
			baos.flush();
			byte[] imageInByte = baos.toByteArray();
			baos.close();
			scenario.embed(imageInByte, "image/png")
			WebUI.closeBrowser()
		}

		generarReporte()

	}
	// aqui empieza abrir reporte:

	def generarReporte(){
		File file = new File(GlobalVariable.reportRoot)

		//first check if Desktop is supported by Platform or not

		if(!Desktop.isDesktopSupported()){

			println('Desktop is not supported')

			return

		}

		Desktop desktop = Desktop.getDesktop()

		if(file.exists()) desktop.open(file)

		println ('File Opened Sucessfully \r')

	}



	// Custom keyword for deleting file - provide file path as a parameter



	def Delete_File(String FilePath) {

		File file = new File(FilePath)

		try

		{

			Files.deleteIfExists(Paths.get(FilePath))

		}

		catch(NoSuchFileException e)

		{

			System.out.println('No such File/Directory Exists')

		}

		catch(DirectoryNotEmptyException e)

		{

			System.out.println('Directory is not Empty.')

		}

		catch(IOException e)

		{

			System.out.println('Invalid Permissions.')

		}

		System.out.println('File Deletion is Successful.')

	}

}