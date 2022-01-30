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
    <div className='empolyee-card mb-3' key={employee.id}>
        <div className='border rounded-corners overflow-hidden d-flex flex-column'>
            <img src={EmployeeImage} alt='employee' className='w-100' />
            <div className='border-top p-3 bg-white'>
                <h3 className='mt-0 mb-2'>{employee.name}</h3>
                <p className='my-0'>{employee.description}</p>
            </div>
            <StatesList employee={employee} />
        </div>
    </div>
  );
};

export default EmployeeCard;
