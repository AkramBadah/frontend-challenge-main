import React from 'react';
import Employees from './views/Employees';
import Header from './components/Header';

import { EmployeesProvider } from './contexts/employees';

function App() {
  
  return (
    <>
      <EmployeesProvider>
        <>
        <Header />
        <Employees />
        </>
      </EmployeesProvider>
    </>
  );
}

export default App;
