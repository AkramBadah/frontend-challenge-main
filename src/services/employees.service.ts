import { handleGet, handlePost, handlePatch } from '../helpers/requests';
import { Employee } from '../types'

function fetchEmplyees() {
  return handleGet(`employees/`);
}

function addEmployee(employee: Employee) {
  return handlePost(`employees/`, employee);
}

function updateEmployee(
  employeeId: number,
  state: string
) {
  return handlePatch(`employees/${employeeId}`, { state });
}

const employeesRequests = {
    fetchEmplyees,
    addEmployee,
    updateEmployee,
}

export default employeesRequests;
