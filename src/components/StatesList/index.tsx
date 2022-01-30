import React, { FC } from 'react';
import { states } from '../../constants';
import classnames from 'classnames';
import { useEmployees } from '../../contexts/employees';

import './StatesList.scss';
import { Employee } from '../../types';

interface Props {
    employee: Employee
}

const StatesList: FC<Props> = ({ employee }) => {
    const { updateEmployeeState } = useEmployees();

    function setEmployeeState(state: string) {
        if (employee.id)
            updateEmployeeState(employee.id, state)
    }

    return (
        <ul className='d-flex unstyled-list states-list border-top'>
            {states.map((state) => (
                <li className='d-flex align-items-center' key={state}>
                    <button
                        className={classnames('py-1 px-2 w-100', { 'is-active': employee.state === state })}
                        onClick={() => setEmployeeState(state)}
                        type='button'
                    >
                        {state}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default StatesList;
