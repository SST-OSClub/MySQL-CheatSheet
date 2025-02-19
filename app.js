// Node.js CRUD Operations Code Stub

const mysql = require('mysql');

// TODO: Update these connection details
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'MySQL84',
    password: '6969',
    database: 'practice2'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting:', err);
        return;
    }
    console.log('Connected as id', connection.threadId);

    // --- CREATE: Insert a New Record ---
    function createUser(name, email, callback) {
        const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
        connection.query(query, [name, email], (err, results) => {
            if (err) {
                // TODO: Handle error appropriately
                console.error('error creating user:', err);
                callback(err);
                return;
            }
            console.log('user id:', results.insertId);
            callback(null, results.insertId);
        });
    }

    // --- UPDATE: Modify Email Address ---
    function updateUserEmail(name, newEmail, callback) {
        const query = 'UPDATE users SET email = ? WHERE name = ?';
        connection.query(query, [newEmail, name], (err, results) => {
            if (err) {
                // TODO: Handle error appropriately
                console.error('error updating user:', err);
                callback(err);
                return;
            }
            console.log(`User ${name} updated. Affected rows: ${results.affectedRows}`);
            callback(null, results.affectedRows);
        });
    }

    // --- DELETE: Remove a Record ---
    function deleteUser(name, callback) {
        const query = 'DELETE FROM users WHERE name = ?';
        connection.query(query, [name], (err, results) => {
            if (err) {
                // TODO: Handle error appropriately
                console.error('error deleting user:', err);
                callback(err);
                return;
            }
            console.log(`User ${name} deleted. Affected rows: ${results.affectedRows}`);
            callback(null, results.affectedRows);
        });
    }

    // --- READ: Retrieve All Records ---
    function readUsers(callback) {
        const query = 'SELECT * FROM users';
        connection.query(query, (err, results) => {
            if (err) {
                // TODO: Handle error appropriately
                console.error('error reading users:', err);
                callback(err);
                return;
            }
            console.log('Users:', results);
            callback(null, results);
        });
    }

    // TODO: Uncomment and test the functions as needed
    // createUser('Anurag Kumar', 'kumar.anurag@gmail.com');
    // updateUserEmail('David Miller', 'david.miller_updated@example.com');
    // deleteUser('Emily Clark');
    // readUsers();

    // TODO: Close the connection when finished
    // connection.end();
      function createinnameemail(callback) {
        const sql = 'CREATE INDEX idx_name_email ON users (name, email)';
        connection.query(sql, (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_KEYNAME') {
                    console.log('already exists.');
                    return callback(null, 'already there');
                }
                return callback(err);
            }
            console.log('index created');
            callback(null, result);
        });
    }

    function getemail(name, callback) {
        const sql = 'SELECT email FROM users WHERE name = ?';
        connection.query(sql, [name], (err, results) => {
            if (err) return callback(err);
            if (results.length === 0) {
                return callback(null, null);
            }
            callback(null, results[0].email);
        });
    }
    createUser('Anurag Kumar', 'kumar.anurag@gmail.com', (err, newId) => {
        if (err) {
            connection.end();
            return;
        }

        updateUserEmail('David Miller', 'david.miller_updated@example.com', (err, affectedRows) => {
            if (err) {
                 connection.end();
                return;
            }

            deleteUser('Emily Clark', (err, affectedRows) => {
                if (err) {
                    connection.end();
                    return;
                }

                readUsers((err, users) => {
                    if (err) {
                        connection.end();
                        return;
                    }

                    createinnameemail((err) => {
                        if(err) {
                            connection.end();
                            return
                        }

                        getemail('David Miller', (err, email) => {
                            if(err){
                                connection.end()
                                return;
                            }

                            console.log("Email of requested user is: ", email)
                            connection.end((err) => {
                                if (err) {
                                    console.error('connection not disconnecting:', err);
                                    return;
                                }
                                console.log('connection gaya');
                            });
                        })
                    })
                });
            });
        });
    });

});