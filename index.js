const employee = {
    name: 'Bob',
    streetAddress: '123 Main St'
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee 
    }

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key]= value;
    return employee
}

function deleteFromEmployeeByKey (newEmployee, key) {
    const deleteEmployee = {...newEmployee}
    delete deleteEmployee[key];
    return deleteEmployee
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee
}