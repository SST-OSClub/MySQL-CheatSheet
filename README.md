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
	CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
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

## Python based Project
1. **Set Up Your Python Environment:**
	-   Ensure that Python is installed on your system.
	-   Create a virtual environment and activate it:
		```bash
		python -m venv 
		venv source venv/bin/activate 
		# On Windows, use venv\Scripts\activate
		```
2. **Install the MySQL Connector:**
	-   Install the `mysql-connector-python` package:
		```bash
		pip install mysql-connector-python
		```
3. **Connect to Your Database and Implement CRUD:**
	-   Create a Python script (e.g., `app.py`) with the code stub given. 
## Project Details
You need to perform CRUD operations in the following order:
1.   **Create Operation:** Add a new record with the name **Anurag Kumar** and the email **kumar.anurag@gmail.com**.
2.   **Update Operation:** Modify the email address of the user **David Miller**.
3.   **Delete Operation:** Remove the record of the user **Emily Clark**.

## Sequence of Operations

### **Step 1: Create Operation – Insert a New Record**
- **Operation:**  
  Add a new user record.
	- **SQL Query:**
	  ```sql
	  INSERT INTO users (name, email) 
	  VALUES ('Anurag Kumar', 'kumar.anurag@gmail.com');
	  ```
  
### **Step 2: Update Operation – Modify Email Address of David Miller**
-   **Operation:**  
    Update the email address of **David Miller**.
	-   **SQL Query:**  
	 _(Assuming the new email is `david.miller_updated@example.com`.)_
    -   **Expected Outcome:**  
    The email field for the record where the name is **David Miller** is updated.
### **Step 3: Delete Operation – Remove the User Emily Clark**
-   **Operation:**  
	    Delete the record for **Emily Clark**.
	- **Expected Outcome:**  
The record with the name **Emily Clark** is removed from the `users` table.

## Final Verification of your Project
1.  **Final Verification**
	After executing the above operations sequentially, perform a final read operation to verify the state of the database:
	```sql
	SELECT * FROM users
	```
2. It should look something like this. Note that the id and timestamp may differ. 

| id  | name           | email                            | created_at          |
|-----|----------------|----------------------------------|---------------------|
| 1   | Alice Johnson  | alice.johnson@example.com        | 2025-02-13 08:45:00 |
| 5   | David Miller   | david.miller_updated@example.com | 2025-02-14 15:20:00 |
| 10  | Anurag Kumar   | kumar.anurag@gmail.com           | 2025-02-15 10:05:00 |

## Additional Assingment - Bonus 50 points

You have to create an index of user's name and their email so that we can fetch the email of the user just by having their name. You will have to implement it from scratch or in the code stub provided. Make sure its not GPTed, we follow patterns in code. 
