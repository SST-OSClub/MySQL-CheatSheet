# Python CRUD Operations Code Stub

import mysql.connector

def connect_db():
    # TODO: Update these connection details
    return mysql.connector.connect(
        host="localhost",
        user="YOUR_USERNAME",
        password="YOUR_PASSWORD",
        database="users"
    )

# --- CREATE: Insert a New Record ---
def create_user(name, email):
    conn = connect_db()
    cursor = conn.cursor()
    query = "YOUR QUERY GOES HERE"
    try:
        cursor.execute(query, (name, email))
        conn.commit()
        print("User created with ID:", cursor.lastrowid)
    except mysql.connector.Error as err:
        # TODO: Handle error appropriately
        print("Error:", err)
    finally:
        cursor.close()
        conn.close()

# --- UPDATE: Modify Email Address ---
def update_user_email(name, new_email):
    conn = connect_db()
    cursor = conn.cursor()
    query = "YOUR QUERY GOES HERE"
    try:
        cursor.execute(query, (new_email, name))
        conn.commit()
        print(f"User {name} updated.")
    except mysql.connector.Error as err:
        # TODO: Handle error appropriately
        print("Error:", err)
    finally:
        cursor.close()
        conn.close()

# --- DELETE: Remove a Record ---
def delete_user(name):
    conn = connect_db()
    cursor = conn.cursor()
    query = "YOUR QUERY GOES HERE"
    try:
        cursor.execute(query, (name,))
        conn.commit()
        print(f"User {name} deleted.")
    except mysql.connector.Error as err:
        # TODO: Handle error appropriately
        print("Error:", err)
    finally:
        cursor.close()
        conn.close()

# --- READ: Retrieve All Records ---
def read_users():
    conn = connect_db()
    cursor = conn.cursor()
    query = "YOUR QUERY GOES HERE"
    try:
        cursor.execute(query)
        results = cursor.fetchall()
        for row in results:
            print(row)
    except mysql.connector.Error as err:
        # TODO: Handle error appropriately
        print("Error:", err)
    finally:
        cursor.close()
        conn.close()

# TODO: Uncomment and test the functions as needed
# create_user('Anurag Kumar', 'kumar.anurag@gmail.com')
# update_user_email('David Miller', 'david.miller_updated@example.com')
# delete_user('Emily Clark')
# read_users()
