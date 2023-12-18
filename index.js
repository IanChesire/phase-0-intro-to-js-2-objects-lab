// Write your solution in this file!
const employee = {
    name: 'Roro',
    streetAddress: 'Birmingham',
    }
function updateEmployeeWithKeyAndValue(){
    const employee_1 ={
        name: 'Sam',
        streetAddress: '11 Broadway',
    }
    const bothEmployee = {
        ...employee, ...employee_1
    }
    return bothEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = 'Sam'
    employee.streetAddress = '12 Broadway'
    return employee;
}
function deleteFromEmployeeByKey(){
    const employee_2 = {
name: 'Actross',
streetAddress: 'Mersey',}
const {name, ...employee_3} = employee_2
return employee_3;
    }

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    return employee;
}