export type Employee = {
    id?: number,
    name: string,
    description: string,
    state: string,
};

export type EmployeesInfo = {
    employees: Employee[],
    loading: boolean,
    error?: string
    isCreating: boolean
}

export type EmployeeState = {
    fetchEmployees: () => Promise<void>;
    employeesInfo: EmployeesInfo;
    addEmployee: (data: Employee) => Promise<void>;
    updateEmployeeState: (employeeId: number, state: string) => Promise<void>;
};