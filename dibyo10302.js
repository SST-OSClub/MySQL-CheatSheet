const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dibyo1817',
  database: 'ossclub'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting:', err);
    return;
  }
  console.log('Connected as id', connection.threadId);
});

function createUser(name, email) {
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  connection.query(query, [name, email], (err, results) => {
    if (err) {
      console.error('Error inserting user:', err);
      return;
    }
    console.log('User created with ID:', results.insertId);
  });
}

function updateUserEmail(name, newEmail) {
  const query = 'UPDATE users SET email = ? WHERE name = ?';
  connection.query(query, [newEmail, name], (err, results) => {
    if (err) {
      console.error('Error updating user:', err);
      return;
    }
    console.log(`User ${name} updated.`);
  });
}

function deleteUser(name) {
  const query = 'DELETE FROM users WHERE name = ?';
  connection.query(query, [name], (err, results) => {
    if (err) {
      console.error('Error deleting user:', err);
      return;
    }
    console.log(`User ${name} deleted.`);
  });
}

function readUsers() {
  const query = 'SELECT * FROM users';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error reading users:', err);
      return;
    }
    console.log('Users:', results);
  });
}

function makeIndex() {
  const query = 'CREATE INDEX user_lookup ON users(name,email)';
  connection.query(query, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Index done');
  });
}


createUser('Anurag Kumar', 'kumar.anurag@gmail.com');
updateUserEmail('David Miller', 'david.miller_updated@example.com');
deleteUser('Emily Clark');
readUsers();
makeIndex();

setTimeout(() => {
  connection.end();
  
},2000);
