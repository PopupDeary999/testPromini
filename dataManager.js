const fs = require('fs');
const path = require('path');

// Path to the JSON file
const dataFile = path.join(__dirname, 'data.json');

// Function to find and return an employee by ID
function findEmployeeById(employeeId) {
    if (fs.existsSync(dataFile)) {
        const data = JSON.parse(fs.readFileSync(dataFile));
        const employees = data.employees || [];
        const employee = employees.find(emp => emp.id === parseInt(employeeId));
        return employee ? employee : 'Employee not found';
    }
    return 'Data file not found';
}

// Command-line interface for interacting with the data
const args = process.argv.slice(2);
if (args[0] === 'findEmployee') {
    console.log(findEmployeeById(args[1]));
} else {
    console.log('Unknown command');
}