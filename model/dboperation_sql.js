// Microsoft SQL Server client for Node.js
const sql = require('mssql');

// Create new config file 
const config = {
    user: 'wqnkvfxtkhvtri',
    password: '62cc2ec0c2e1d374f00cdeb4b6287698be2953f80ae8efe45faaf50a53fcc46d',
    server: 'localhost',
    database: 'd1fku3pdovtr66',
} 

module.exports = {
list: (req, res) => {
      // Run a query on the database
        sql.connect(config).then(() => {
            return sql.query`select * from employee`
                }).then(result => {
                    res.status(200).send(results.rows);
                }).catch(err => {
                    console.log(err);
        });
    },  
|}
