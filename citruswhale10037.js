// Node.js CRUD Operations Code Stub

const mysql = require('mysql2');

// TODO: Update these connection details
// createConnection --> single connection. 
// createPool --> multiple connections to multiple databases. Useful for db heavy apps.
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Macaroni66__',
  database: 'lil_unicorn_mysql1'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting:', err);
    return;
  }
  console.log('Connected as id', connection.threadId);
});

// --- CREATE: Insert a New Record ---
function createUser(name, email) {
  const query = 'INSERT INTO users (name, email) VALUES (?, ?);';
  connection.query(query, [name, email], (err, results) => {
    if (err) {
      // TODO: Handle error appropriately
      console.error(err);
      return;
    }
    console.log('User created with ID:', results.insertId);
  });
}

// --- UPDATE: Modify Email Address ---
function updateUserEmail(name, newEmail) {
  const query = 'UPDATE users SET email = ? WHERE name = ?;';
  connection.query(query, [newEmail, name], (err, results) => {
    if (err) {
      // TODO: Handle error appropriately
      console.error(err);
      return;
    }
    console.log(`User ${name} updated.`);
  });
}

// --- DELETE: Remove a Record ---
function deleteUser(name) {
  const query = 'DELETE FROM users WHERE name = ?;';
  connection.query(query, [name], (err, results) => {
    if (err) {
      // TODO: Handle error appropriately
      console.error(err);
      return;
    }
    console.log(`User ${name} deleted.`);
  });
}

// --- READ: Retrieve All Records ---
function readUsers() {
  const query = 'SELECT * FROM users';
  connection.query(query, (err, results) => {
    if (err) {
      // TODO: Handle error appropriately
      console.error(err);
      return;
    }
    console.log('Users:', results);
  });
}

// TODO: Uncomment and test the functions as needed
createUser('Anurag Kumar', 'kumar.anurag@gmail.com');
updateUserEmail('David Miller', 'david.miller_updated@example.com');
deleteUser('Emily Clark');
readUsers();

// TODO: Close the connection when finished
connection.end();


/* Notes to self:
- Connect with workbench to get visual idea. Click on lil energy zap thing to run sql commands on workbench to get visual idea.
- Explore more abt schema, try making a basic e-commerce schema.
- Code runner installed for js to execute (it was a pain to understand if it was working or not without this).
- Use '?' when fields need to be replaced with values for any query.
- Connections have to be created in the js file itself with the following base details:
    - host
    - user
    - password
    - database
- Manually ensure connections get closed post finishing the operations needed.
- Try indexing next.
*/