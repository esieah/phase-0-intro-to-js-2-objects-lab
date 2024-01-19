// Write your solution in this file!
const employee = {name: "sun", strretAddress: "21 michaelstreet"}



function updateEmployeeWithKeyAndValue(employee, key, value){

  const newEmployee = {...employee};

  newEmployee[key] = value;
  return newEmployee

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee
}


function deleteFromEmployeeByKey(employee, key){
  const newEmployee = {employee}
   delete newEmployee.key

   return newEmployee

}






function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name
    return employee
}