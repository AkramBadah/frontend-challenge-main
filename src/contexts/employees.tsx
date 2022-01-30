import React, { createContext, useContext, ReactElement, useState } from 'react';
import {
    EmployeesInfo,
    Employee,
    EmployeeState
} from '../types';
import employeesService from '../services/employees.service'

interface Props {
  children: ReactElement;
}

const EmployeesContext = createContext({} as EmployeeState);

export const EmployeesProvider = ({ children }: Props) => {

    const [employeesInfo, setEmployeesInfo] = useState<EmployeesInfo>({ loading: false, isCreating: false, employees: [], error: '' });

    const handleError = (error: string, showAlert: boolean = true) => {
        setEmployeesInfo({
            ...employeesInfo,
            loading: false,
            error: error,
            isCreating: false
          });
        // if (showAlert) sendAlert((error as string) ? error : 'Error updating payments', 'error');
        return Promise.reject(error);
      };

    const fetchEmployees = (showAlert: boolean = true) => {
        setEmployeesInfo({ ...employeesInfo, loading: true });
        return employeesService.fetchEmplyees().then(
        (response: Employee[]) => {
            setEmployeesInfo({
                ...employeesInfo,
                loading: false,
                employees: response,
            });
        },
        (error) => handleError(error),
        );
    };

    const addEmployee = (employee: Employee) => {
        setEmployeesInfo({ ...employeesInfo, isCreating: true });
        return employeesService.addEmployee(employee).then(
        (response: Employee) => {
            setEmployeesInfo({
                ...employeesInfo,
                isCreating: false,
                employees: [...employeesInfo.employees, response],
            });
        },
        (error) => handleError(error),
        );
    };


    const updateEmployeeState = (employeeId: number, state: string ) => {
        return employeesService.updateEmployee(employeeId, state).then(
        (response: Employee) => {
            setEmployeesInfo({
                ...employeesInfo,
                loading: false,
                employees: employeesInfo.employees.map((employee) => {
                    if (employee.id === response.id)
                        return response;
                    return employee;
                }),
            });
        },
        (error) => handleError(error),
        );
    };


  const state: EmployeeState = {
    fetchEmployees,
    employeesInfo,
    addEmployee,
    updateEmployeeState,
  };
  return <EmployeesContext.Provider value={state}>{children}</EmployeesContext.Provider>;
};

export const useEmployees = () => useContext(EmployeesContext);
