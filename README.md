# Backend server application with Node.js

In this pet project, I learned how to create a server application with Node.js and connect to a database (using mongodb as an example). Described the application logic with REST API architecture. I used the postman service to send requests to the server.

# Structure:

The application is divided into layers.\
-DAL -- data access layer for interacting with the database. As mongoose framework.\
-Controller -- work with the client-server component.\
-Service -- business logic.

# Dependencies:

-express -- framework for writing server applications.\
-express-fileupload -- to work with files.\
-mongoose -- mongodb wrapper to interact with database.\
-uuid -- to generate unique id. (for further interaction with files).\
-nodemon -- to automatically restart application.

# Notes

The application is launched using nodemon, the command -npm run dev