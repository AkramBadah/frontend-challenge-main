import React, { FC } from 'react';
import './Loader.scss';

interface Props {
    size?: string
}

const Loader: FC<Props> = ({ size }) => {
    return (
        <div className={`loader d-inline-block ${size}`} />
    );
};

export default Loader;
