// Write your solution in this file!
// Initialize the employee object
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main Street',
};

// Function to update employee non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Use the spread operator to create a new object with the updated key-value pair
    return {
        ...employee,
        [key]: value,
    };
}

// Function to update employee destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Mutate the original employee object
    employee[key] = value;
    return employee;
}

// Function to delete key from employee non-destructively
function deleteFromEmployeeByKey(employee, key) {
    // Use the spread operator to create a new object without the specified key
    const newEmployee = {...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete key from employee destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Mutate the original employee object
    delete employee[key];
    return employee;
}