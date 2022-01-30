import React, { FC, useState } from 'react';
import CreateEmployeeModal from '../CreateEmployeeModal';

import './Header.scss';

const Header: FC = () => {
    const [open, setOpen] = useState(false);

    function onClose() {
        setOpen(false)
    }

    function onOpen() {
        setOpen(true)
    }
    return (
        <div className='py-4'>
            <header className='py-2'>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h1 className='my-0'>
                            Employees
                        </h1>
                        <button
                            className='btn'
                            onClick={onOpen}
                            type='button'
                        >
                            Create Employee
                        </button>
                    </div>
                </div>
            </header>
            <CreateEmployeeModal
                open={open}
                onClose={onClose}
            />
        </div>
    );
};

export default Header;
