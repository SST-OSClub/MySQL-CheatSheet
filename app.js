// Node.js CRUD Operations Code Stub

const mysql = require('mysql');

// TODO: Update these connection details
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jainsahab@16',
  database: 'oss_club'
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
  const query =  `INSERT INTO users (name, email) VALUES ('Anurag Kumar', 'kumar.anurag@gmail.com')`;
  connection.query(query, [name, email], (err, results) => {
    if (err) {
      // TODO: Handle error appropriately
      console.error('Error creating user', err);
      return;
    }
    console.log('User created with ID:', results.insertId);
  });
}
function getUserEmailByName(name) {
  const query = `SELECT email FROM users WHERE name = 'Anurag Kumar'`;
  connection.query(query, [name], (err, results) => {
    if (err) {
      console.error('Error fetching user email:', err);
      return;
    }
     console.log(`Email for ${name}:`, results[0].email);
  });
}
// --- UPDATE: Modify Email Address ---
function updateUserEmail(name, newEmail) {
  const query = `UPDATE users SET email = 'david.miller_updated@example.com' WHERE name = 'David Miller'`;;
  connection.query(query, [newEmail, name], (err, results) => {
    if (err) {
      // TODO: Handle error appropriately
      console.error('User not updated', err);
      return;
    }
    console.log(`User ${name} updated.`);
  });
}

// --- DELETE: Remove a Record ---
function deleteUser(name) {
  const query = `DELETE FROM users WHERE name = 'Emily Clark'`;
  connection.query(query, [name], (err, results) => {
    if (err) {
      // TODO: Handle error appropriately
      console.error('Error in deleting user', err);
      return;
    }
    console.log(`User ${name} deleted.`);
  });
}

// --- READ: Retrieve All Records ---
function readUsers() {
  const query = `SELECT * FROM users` ;
  connection.query(query, (err, results) => {
    if (err) {
      // TODO: Handle error appropriately
      console.error('Error in reading users', err);
      return;
    }
    console.log('Users:', results);
  });
}

// TODO: Uncomment and test the functions as needed
createUser('Anurag Kumar', 'kumar.anurag@gmail.com');
updateUserEmail('David Miller', 'david.miller_updated@example.com');
deleteUser('Emily Clark');
getUserEmailByName('Anurag Kumar');
readUsers();

// TODO: Close the connection when finished
connection.end();
