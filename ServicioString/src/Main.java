import logica.StringService;

import thriftly.java.ThriftlyServer;
import thriftly.java.EvoException;

public class Main {

	public static void main(String[] args) throws EvoException {
		ThriftlyServer servidor = new ThriftlyServer();
		servidor.AddService(new StringService(), "StringService");
		servidor.StartServer();
	}
}