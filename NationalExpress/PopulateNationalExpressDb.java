/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package populatenationalexpressdb;

import java.sql.SQLException;
import java.sql.*;

/**
 *
 * @author Dylan
 */

public class PopulateNationalExpressDb {
        static final String DB_URL = "jdbc:mysql://178.62.25.59:3306";
        static final String USER = "root";
        static final String PASSWORD = "password";
            
        static final String DROP_DATABASE = "DROP DATABASE IF EXISTS NESpace;";
        static final String CREATE_DATABASE = "CREATE DATABASE NESpace;";
        static final String USE_DATABASE = "USE NESpace;";
        static final String CREATE_PLANET_TABLE = "CREATE TABLE planet(planetId INT NOT NULL AUTO_INCREMENT, planetName VARCHAR(255) NOT NULL, PRIMARY KEY (planetId));";
        static final String CREATE_ROUTE_TABLE = "CREATE TABLE route(routeId INT NOT NULL AUTO_INCREMENT, routeName VARCHAR(255) NOT NULL, departingWeekDay VARCHAR(255) NOT NULL, departure INT NOT NULL, destination INT NOT NULL, legOne INT, legTwo INT, legThree INT, legFour INT, PRIMARY KEY (routeId));";
        static final String ALTER_DESTINATION_FK = "ALTER TABLE route ADD CONSTRAINT ROUTE_DESTINATION_FKTYPE FOREIGN KEY (destination) REFERENCES planet(planetId)";
        static final String ALTER_DEPARTURE_FK = "ALTER TABLE route ADD CONSTRAINT ROUTE_DESTINATION_FKTYPE FOREIGN KEY (departure) REFERENCES planet(planetId)";
        static final String INSERT_ROUTE_DATA = "INSERT INTO route(routeName, departure, destination, departingWeekDay, legOne, legTwo, legThree, legFour) VALUES ('NXinS1', 1, 2, 'Monday', 1, 2, 0, 0), ('NXinS2', 2, 3, 'Monday', 2, '0', 0, 0), ('NXinS3', 3, 4, 'Monday', 1, 2, 0, 0), ('NXinS4', 4, 3, 'Tuesday', 3, 4, 0, 0), ('NXinS5', 1, 4, 'Tuesday', 5, 7, 6, 0), ('NXinS6', 2, 4, 'Wednesday', 8, 9, 0, 0), ('NXinS7', 3, 4, 'Wednesday', 2, 3, 4, 0), ('NXinS8', 4, 1, 'Thursday', 3, 10, 11, 0), ('NXinS9', 3, 4, 'Thursday', 12, 13, 11, 0), ('NXinS10', 3, 4, 'Friday', 3, 4, 0, 0), ('NXinS11', 1, 4, 'Friday', 3, 10, 11, 0), ('NXinS12', 2, 1, 'Saturday', 8, 9, 0, 0), ('NXinS13', 3, 2, 'Saturday', 14, 0, 0, 0), ('NXinS14', 4, 1, 'Saturday', 3, 15, 0, 0), ('NXinS15', 1, 4,'Saturday', 12, 13, 0, 0), ('NXinS16', 2, 3, 'Sunday', 8, 9, 0, 0), ('NXinS17', 3, 2, 'Sunday', 2, 0, 0, 0), ('NXinS18', 4, 2, 'Sunday', 3, 15, 0, 0), ('NXinS19', 3, 1, 'Sunday', 17, 14, 0, 0), ('NXinS20', 4, 1, 'Sunday', 5, 7, 15, 14);";
        static final String INSERT_PLANET_DATA = "INSERT INTO planet(planetName) VALUES ('Mercury'), ('Venus'), ('Mars'), ('Earth');";
        /**
     * @param args the command line arguments
     */
    
    //args takes mysSql locations
    public static void main(String[] args) {
        Connection conn = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            
            conn = DriverManager.getConnection(DB_URL, USER, PASSWORD);
            if (conn != null) {
                DatabaseMetaData dm = (DatabaseMetaData) conn.getMetaData();
                System.out.println("Driver name: " + dm.getDriverName());
                System.out.println("Driver version: " + dm.getDriverVersion());
                System.out.println("Product name: " + dm.getDatabaseProductName());
                System.out.println("Product version: " + dm.getDatabaseProductVersion());
                Statement stmt = conn.createStatement();
                boolean ars = stmt.execute(DROP_DATABASE);
                int rs = stmt.executeUpdate(CREATE_DATABASE);
                rs = stmt.executeUpdate(USE_DATABASE);
                rs = stmt.executeUpdate(CREATE_PLANET_TABLE);
                rs = stmt.executeUpdate(CREATE_ROUTE_TABLE);
                rs = stmt.executeUpdate(INSERT_ROUTE_DATA);
                rs = stmt.executeUpdate(INSERT_PLANET_DATA);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } catch(ClassNotFoundException ex){
            ex.printStackTrace();
        }finally {
            try {
                if (conn != null && !conn.isClosed()) {
                    conn.close();
                }
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
    }
    
    
 

    
}
