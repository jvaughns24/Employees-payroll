// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray =[]
// Collect employee data
const collectEmployees = function() {
  const firstName=prompt("what is the your first name ?")
  const lastName=prompt("what is your last name ?")
  const salary=prompt("what is your salary ?")
  const newEmployee={
    firstName,lastName,salary
  }

  employeesArray.push(newEmployee)
  const forward=confirm("Do you want to continue ?")
  if (forward){
    return collectEmployees()
  }else{
    return employeesArray
  }
  // TODO: Get user input to create and return an array of employee objects
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let total = 0
  for (let i = 0; i < employeesArray.length; i++) {
    total = total + parseFloat(employeesArray[i].salary)
    
  }
  const average=total/employeesArray.length
  console.log ("the averege salary is "+ average + "for "+ employeesArray.length + " employees")
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const index=Math.floor(Math.random()*employeesArray.length)
  const randomEmployees= employeesArray[index]
  console.log("random employee is "+ randomEmployees.firstName+" "+ randomEmployees.lastName)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
