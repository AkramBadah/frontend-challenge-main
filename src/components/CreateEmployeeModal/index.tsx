import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Modal from '../Modal';
import { states } from '../../constants';
import { useEmployees } from '../../contexts/employees';

interface Props {
    open: boolean,
    onClose: () => void
}

const CreateEmployeeModal: FC<Props> = ({ open, onClose }) => {
    const initialState = {
        name: '',
        description: '',
        state: 'ADDED'
    }

    const [state, setState] = useState(initialState);

    const { addEmployee } = useEmployees();

    function handleInput(ev: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        setState({
            ...state,
            [ev.target.name]: ev.target.value
        })
    }

    function handleSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        addEmployee(state).then(() => {
            onClose();
        });
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
            title='Create Employee'
        >
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='mb-2 d-inline-block'>Name</label>
                    <input name='name' className='form-control' onChange={handleInput} value={state.name} />
                </div>
                <div className='mb-3'>
                    <label className='mb-2 d-inline-block'>Description</label>
                    <textarea name='description' className='form-control' onChange={handleInput} value={state.description} />
                </div>
                <div className='mb-3'>
                    <label className='mb-2 d-inline-block'>State</label>
                    <select name='state' className='form-control' onChange={handleInput} value={state.state}>
                        {states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className='px-3 pt-3 mx-n-3 border-top d-flex justify-content-end'>
                    <button className='btn primary' type='submit'>
                        Create Employee
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default CreateEmployeeModal;
