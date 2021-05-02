package logica;

import thriftly.java.PublishedAttribute;
import thriftly.java.ParametersName;

public class StringService {

	@PublishedAttribute()
	@ParametersName(Names = {"string1", "string2"})
	public String unir(String string1, String string2) throws Exception{
		if(string1.compareTo("")==0) {
			throw new Exception("String 1 debe ser definido");
			
		}
		if(string2.compareTo("")==0) {
			throw new Exception("String 2 debe ser definido");		
		}
		return string1+""+string2;
	}
	
	@PublishedAttribute()
	@ParametersName(Names = {"string1"})
	public String aMayusculas(String string1) throws Exception{
		if(string1.compareTo("")==0) {
			throw new Exception("String 1 debe ser definido");
			
		}
		return string1.toUpperCase();
	}
	
	@PublishedAttribute()
	@ParametersName(Names = {"string1"})
	public String aMinusculas(String string1) throws Exception{
		if(string1.compareTo("")==0) {
			throw new Exception("String 1 debe ser definido");
			
		}
		return string1.toLowerCase();
	}
}