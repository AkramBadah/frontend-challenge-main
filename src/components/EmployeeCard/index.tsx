import React, { FC } from 'react';
import { Employee } from '../../types';

import StatesList from '../StatesList';

import EmployeeImage from '../../assets/imgs/employee.png'

import './EmployeeCard.scss';
interface Props {
    employee: Employee
}

const EmployeeCard: FC<Props> = ({ employee }) => {
  return (
    <div className='mb-3' key={employee.id}>
      <div className='employee-card d-flex border rounded-corners overflow-hidden'>
          <img src={EmployeeImage} alt='employee' width="214" height='200' />
          <div className='d-flex flex-column justify-content-between w-100'>
            <div className='p-3 bg-white'>
              <h3 className='mt-0 mb-2'>{employee.name}</h3>
              <p className='my-0'>{employee.description}</p>
            </div>
            <StatesList employee={employee} />
          </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
