Commits referring to tech - 
FirstTime = Angular app
Add files via upload = Java populate DB, dont need to enter folder just read the populateNationExpressDb.java
API = node api

Tech Used
Server is running Linux 16.04. stack is apache mysql node.js angular 8

Database is MySQL to set up the database make sure remote server has MySQL 5.7 installed - can be installed through apt.
Run service mysql start
Configure user permissions to allow connections @ local host. Run populate java script with correct credentials from local machine.  

Node.js api, run 'node server.js' while on the local machine. To keep running create either crono task or use forever.

Angular app, deployed by running 'ng build --prod --aot', zipped files created in dist folder. Use scp over ssh to put onto server.

Using apache 2.4 put compiled UI into /var/www/html. Apache will serve files at IP if no localhost URL has been set up. 


