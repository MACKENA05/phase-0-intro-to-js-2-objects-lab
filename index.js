// Write your solution in this file!
const employee = {
    name:"Sam",
    streetAddress:"11 Broadway",
};
function updateEmployeeWithKeyAndValue(Object,key,value){
   return {
    ...employee,
    [key]: value
   };
};
function destructivelyUpdateEmployeeWithKeyAndValue(Object,key,value){
    Object[key] = value;
     return Object;

};

function deleteFromEmployeeByKey(employee,key){
    let newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee;
};
 function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee;
 }
 let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');




