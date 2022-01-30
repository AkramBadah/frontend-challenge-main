import classNames from 'classnames';
import React, { ChangeEvent, FC } from 'react';

interface Props {
    onChange: (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
    value: string,
    name?: string,
    label?: string,
    error?: string,
    component?: string,
    options?: { value: string, label: string }[]
}

const FieldInput: FC<Props> = ({ onChange, value, name, label, error, component, options }) => {
  return (
    <div className='mb-3'>
        {label && (<label className='mb-2 d-inline-block'>{label}</label>)}
        {component === 'textarea' && (
          <textarea
            name={name}
            className={classNames('form-control', { 'error': !!error })}
            onChange={onChange}
            value={value}
          />
        )}

        {component === 'select' && (
          <select
            name={name}
            className={classNames('form-control', { 'error': !!error })}
            onChange={onChange}
            value={value}
          >
            {options?.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
        )}

        {component !== 'textarea' && component !== 'select' && (
          <input
            name={name}
            className={classNames('form-control', { 'error': !!error })}
            onChange={onChange}
            value={value}
          />
        )}
        {error && (<span className='d-inline-block mt-2 text-red'>{error}</span>)}
    </div>
  );
};

export default FieldInput;
