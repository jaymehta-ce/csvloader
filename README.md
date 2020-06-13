# Node API demo with Swagger, Mocha and Postgres/MSSQL

Created application of Node API using below modules:

  - Express framework
  - Swagger UI
  - Mocha
  - Postgres/MSSQL database
  - Eslint
  - Circuit Breaker

# Steps to run the application

- Click on the URL: https://node-apidemo.herokuapp.com/, You will see a message "Welcome to Home page !!"
- Click on the URL: https://node-apidemo.herokuapp.com/employeeapi/, You will see 3 routes '/create_employee', '/view_employee' and '/delete_employee'

##### create_employee
- Click on '/create_employee' route and then on 'Try it out' button
- You will see different fields such as emp_firstname, emp_lastname, emp_email and emp_gender. Fill those entries and click on 'Execute' button.
- In the response section, you will see a message "Employee added successfully".

##### view_employee
- To view all the employees, click on second route '/view_employee' and then on 'Try it out' button.
- Click on 'Execute' button.
- In the response section, you will see the list of all employees from the database.
 
##### delete_employee
- To delete employee based on ID, click on third route '/delete_employee' and then on 'Try it out' button.
- Enter the ID to be deleted from database and click on 'Execute' button
- In the response section, you will a message "Employee deleted successfully".

#### To run the application locally
npm start

# Express Framework
Express is a flexible Node.js web application framework that provides a robust set of features for web applications.
Below files and folders are used in the application:

root <br />
└──  controller <br />
&nbsp;&nbsp;&nbsp;&nbsp;└──  employee.js <br />
└──  model <br />
&nbsp;&nbsp;&nbsp;&nbsp;└──  dboperation_postgres.js <br />
&nbsp;&nbsp;&nbsp;&nbsp;└──  dboperation_sql.js <br />
└──  views <br />
&nbsp;&nbsp;&nbsp;&nbsp;└──  home.handlebars <br />
└── routes <br />
&nbsp;&nbsp;&nbsp;&nbsp;└──  routes.js <br />
└── swagger <br />
&nbsp;&nbsp;&nbsp;&nbsp;└──   swagger.js <br />
└── mocha <br />
&nbsp;&nbsp;&nbsp;&nbsp;└──  employeetest.js <br />
└──  index.js <br />
└──  .env <br />
└──  eslintrc <br />
└──  package.json <br />
└──  README.md <br />

   
- index.js: Acts as the main file of the project where we initialize the app and other elements of the project.
- package.json: Takes care of the dependencies, the scripts to run with the npm command, and the version of project.
- routes: Define the app routes, with HTTP methods. For example, in the application two routes are defined '/employeelist' and '/addemployee'.
- middlewares: We can write middlewares to interpret all incoming requests before moving to the route handler. 
- mocha: Here we can write all the unit tests or acceptance tests for the API server.

# Swagger UI
Swagger is a specification and complete framework implementation for describing, producing, consuming, and visualizing RESTful web services. It is an auto-generated swagger-ui generated from express based on a swagger.json file

## Importing
` 
const swaggerUi = require('swagger-ui-express'); 
`

# Mocha
Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
Used mocha to test below:
- GET /view_employee route
- Check 'package.json' file
- Check 'swagger.json' file

# Postgres
node-postgres is a collection of node.js modules for interfacing with PostgreSQL database.

## Installing
`
npm install pg
`
## Features
- Connection pooling
- Parameterized queries
- Named statements

# Eslint
ESLint is a tool for identifying and reporting on patterns found in JavaScript code. 
## Command
npm run lint

# Circuit Breaker
The Circuit Breaker helps the application to manage failures proactively, failing fast and/or providing fallback values when applicable.
'Opossum' is a Node.js circuit breaker that executes asynchronous functions and monitors their execution status.

```sh
const circuitBreaker = require('opossum');
const options = {
    timeout: 3000, // If the function takes longer than 3 seconds, trigger a failure
    errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
    resetTimeout: 10000 // After 10 seconds, try again.
};
var circuit = new circuitBreaker(dynamicobj, options);
```
