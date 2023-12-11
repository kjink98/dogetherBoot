package com.dogether;

import java.sql.Connection;
import java.sql.DriverManager;

import org.junit.jupiter.api.Test;

public class MariaConnectionTest {

	@Test
	public void ConnectionTest() throws Exception {
			Class.forName("org.mariadb.jdbc.Driver");
			String url = "jdbc:mariadb://localhost:3306/dog";
			Connection conn = DriverManager.getConnection(url, "root", "1111");
			System.out.println("DB 연결 성공");
			
	}
}
