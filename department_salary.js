//Task 1: Creating a Department Structure

const company= {
    departments:[
        {
            departmentName: `Business`,
            employees:[
                {
                   name: `Apple Jane`,
                   salary: 100000,
                   subordinates:[
                    {
                        name: `Bob Millers`,
                        salary: 80000,
                        subordinates:[
                            {
                                name: `John Johnson`,
                                salary: 60000,
                                subordinates:[]
                            }
                        ]
                    }
                   ]
            
                },
                { name: `Sarah Lee`,
                  salary: 90000,
                  subordinates: []

                }
            ]
        },
        {
            departmentName: `Cybersecuirty`,
            employees: [
                {
                    name: `Lily Pad`,
                    salary: 85000,
                    subordinates: [
                        {
                            name: `Frank Myers`,
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name:`Jane Joe`,
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
       
    ]
};

console.log("Department Details:",company); //Logging the department for better console readibility

//Task 2: Creating a Recursive Function to Calculate Total Salary for a Department

//Creating a function that accepts a department object and recursively calculates the total salary for that department

function calculateDepartmentSalary(department){
  let totalSalary= 0;

  for(let employee of department.employees){
    totalSalary += employee.salary;      //adding each employee's salary to the total

    if(employee.subordinates.length !== 0){
        totalSalary += calculateDepartmentSalary({employees:employee.subordinates}); //Adding subordinates salaries to the total
    }
  }
  return totalSalary;
}

const businessDepartment = company.departments[0];
const totalSalary = calculateDepartmentSalary(businessDepartment);
console.log("Total Salary for the Business Department:",totalSalary); //Testing the function 

//Task 3: Creating a Function to Calculate the Total Salary for All Departments

//Creating a function that accepts the company object and iterates over each department to calculate the total salary of the company

function calculateCompanySalary(company){
    let totalSalary=0;
    
    for(let department of company.departments){
        totalSalary += calculateDepartmentSalary (department); //iterates over each department to calculate total
    }
    return totalSalary;
}
console.log("Salary of the Whole Company:",calculateCompanySalary(company)); //Testing the function