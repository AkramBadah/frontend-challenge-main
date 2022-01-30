import React, { FC, useEffect } from 'react';
import { useEmployees } from '../../contexts/employees';
import EmployeeCard from '../../components/EmployeeCard'
import Loader from '../../components/Loader';

const Employees: FC = () => {
  const { fetchEmployees, employeesInfo: { employees, loading } } = useEmployees();

  useEffect(() => {
    fetchEmployees()
  }, []);
    
  return (
    <div className='container'>
      <section className='d-flex flex-wrap py-4 mx-n-3'>
        {loading ? (
          <div className='d-flex align-items-center justify-content-center w-100 h-100'>
            <Loader />
          </div>
        ) :
        employees?.map((employee) => {
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
