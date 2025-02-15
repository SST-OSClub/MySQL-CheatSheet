# Assignment for Databases 101
Hello everyone, this is going to be the assignment of Databases 101. In here, you have to perform CRUD operations in JavaScript or Python.

## What do you have to do?
You have to perform CRUD operations in the given sequence according to this. You are given a list of instructions, follow them to setup a local database on your computer system and then start working on the project. Once done, you can run a SQL query(given below) to populate dummy data in the database. Once there is data in your local database, you are good to go with the rest of the project given below. 

## Instructions to set up the MySQL Workbench and Database 
1.  **Download and Install MySQL:**
    
    -   Visit the [official MySQL website](https://dev.mysql.com/downloads/mysql/) and download the MySQL Community Server appropriate for your operating system.
    -   Follow the installation wizard to install MySQL on your computer.
2. **Download and Install MySQL Workbench:**
	-   Visit the [MySQL Workbench download page](https://dev.mysql.com/downloads/workbench/) and install the latest version.
	-   Use MySQL Workbench to manage your databases, run SQL queries, and visualize the database schema.
3. **You can also refer to this video for installation of both**: https://youtu.be/If_racf2ocM?si=3G4tqjWNlgtlKUKn

## Set up Database on your system
1. **Create a New Database:**
	-   Open MySQL Workbench and connect to your local MySQL server.
	-   Execute the following command to create a new database (replace `your_database_name` with **databases**):
	    `CREATE DATABASE databases;`
2. **Create a Table for Dummy Data:**
	- Switch to your newly created database: `USE databases;`
3. **Create a _users_ table**
	```sql
	CREATE TABLE users ( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL UNIQUE );
	```
4. **Run the following SQL query in MySQL Workbench to insert dummy data into the `users` table:**
	```sql
	INSERT INTO users (name, email) VALUES ('David Miller', 'david.miller@example.com'), ('Emily Clark', 'emily.clark@example.com'), ('Frank Peterson', 'frank.peterson@example.com'), ('Grace Lee', 'grace.lee@example.com'), ('Hannah Scott', 'hannah.scott@example.com'), ('Ian Turner', 'ian.turner@example.com'), ('Jane Doe', 'jane.doe@example.com');
	```
5. **Now you are ready to start with the project**

## Node JS based Project
1. **Set Up Your Node.js Environment:**
	-   Ensure that Node.js is installed on your system.
	-   Create a new Node.js project and initialize it:
		```
		mkdir my_project 
		cd my_project 
		npm init -y
	    ```
2.  **Install MySQL Package:**
	-   Install the MySQL package (or mysql2 for promise support):
	* `npm install mysql`
3. **Connect to Your Database and Implement CRUD:**
	-   Create a JavaScript file (e.g., `app.js`) and include the following sample code to write the code in the given stub.
	- 