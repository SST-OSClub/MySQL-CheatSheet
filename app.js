// Node.js CRUD Operations Code Stub

const mysql = require('mysql');

// TODO: Update these connection details
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD',
  database: 'users'
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
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
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
  const query = 'UPDATE users SET email = ? WHERE name = ?';
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
  const query = 'DELETE FROM users WHERE name = ?';
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

function createIndex() {
  const query = 'CREATE INDEX index_name ON users (name)';
  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Index created');
  });
}
// TODO: Uncomment and test the functions as needed
// createUser('Anurag Kumar', 'kumar.anurag@gmail.com');
// updateUserEmail('David Miller', 'david.miller_updated@example.com');
// deleteUser('Emily Clark');
// readUsers();

// TODO: Close the connection when finished
// connection.end();

createUser('Anurag Kumar', 'kumar.anurag@gmail.com');
updateUserEmail('David Miller', 'david.miller_updated@example.com');
deleteUser('Emily Clark');
readUsers();