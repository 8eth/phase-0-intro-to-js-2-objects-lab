// Write your solution in this file!

let employee = {
    name: '',
    streetAddress: '',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee, [key]: value};
    return newObject;    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = {...employee, key};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}