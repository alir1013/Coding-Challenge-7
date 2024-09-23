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