import React, { FC, useEffect } from 'react';
import { useEmployees } from '../../contexts/employees';
import EmployeeCard from '../../components/EmployeeCard'

const Employees: FC = () => {
  const { fetchEmployees, employeesInfo: { employees } } = useEmployees();

  useEffect(() => {
    fetchEmployees()
  }, []);
    
  return (
    <div className='container'>
      <section className='d-flex flex-wrap py-4 mx-n-3'>
        {employees?.map((employee) => {
          return (
            <EmployeeCard
              key={employee.id}
              employee={employee}
            />
          )
        })}
      </section> 
    </div>
  )
      
};

export default Employees;
