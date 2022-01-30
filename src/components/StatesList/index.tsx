import React, { FC } from 'react';
import { states } from '../../constants';
import classnames from 'classnames';
import { useEmployees } from '../../contexts/employees';
import { Employee } from '../../types';

import { ReactComponent as ActiveIcon } from '../../assets/imgs/icons/active-icon.svg'

import './StatesList.scss';

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
                        className={classnames('w-100', { 'is-active': employee.state === state })}
                        onClick={() => setEmployeeState(state)}
                        type='button'
                    >
                        {employee.state === state && (
                            <ActiveIcon className='icon' />
                        )}
                        {state}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default StatesList;
