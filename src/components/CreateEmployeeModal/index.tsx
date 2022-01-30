import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Modal from '../Modal';
import { states } from '../../constants';
import { useEmployees } from '../../contexts/employees';
import FieldInput from '../FieldInput';
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
    const [isSubmited, setIsSubmited] = useState(false);

    const { addEmployee } = useEmployees();

    function handleInput(ev: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        setState({
            ...state,
            [ev.target.name]: ev.target.value
        })
    }

    function handleSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        setIsSubmited(true);
        if (state.name && state.name.length >= 4) {
            addEmployee(state).then(() => {
                onClose();
                setState(initialState)
                setIsSubmited(false);
            });
        }
    }

    const nameError = isSubmited && (!state.name || state.name.length < 4);

    return (
        <Modal
            open={open}
            onClose={onClose}
            title='Create Employee'
        >
            <form onSubmit={handleSubmit}>
                <FieldInput
                    label='Name'
                    name='name'
                    onChange={handleInput}
                    value={state.name}
                    error={nameError ? 'Name is required and at least has to be 4 characters' : ''}
                />

                <FieldInput
                    component='textarea'
                    label='Description'
                    name='description'
                    onChange={handleInput}
                    value={state.description}
                />

                <FieldInput
                    component='select'
                    label='State'
                    name='state'
                    onChange={handleInput}
                    value={state.state}
                    options={states.map((state) => ({ label: state, value: state }))}
                />

                <div className='px-3 pt-3 mx-n-3 border-top d-flex justify-content-end'>
                    <button className='btn primary' type='submit' disabled={nameError}>
                        Create Employee
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default CreateEmployeeModal;
