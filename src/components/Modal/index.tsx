import classNames from 'classnames';
import React, { FC } from 'react';
import './Modal.scss';

interface Props {
    open: boolean,
    onClose: () => void,
    title: string
}

const Modal: FC<Props> = ({ children, open, onClose, title }) => {
  return (
    <div className='modal'>
        {open && (
            <button className='overlay' onClick={onClose}  type='button' />
        )}
        <div className={classNames('modal-content border rounded-corners', { 'is-active': open })}>
            <div className='modal-header d-flex align-items-center justify-content-between p-3 border-bottom'>
                <h2 className='my-0'>{title}</h2>
                <button onClick={onClose} type='button'>
                    X
                </button>
            </div>
            <div className='p-3'>
                {children}
            </div>
        </div>
    </div>
  );
};

export default Modal;
