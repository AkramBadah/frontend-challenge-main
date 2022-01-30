import classNames from 'classnames';
import React, { FC } from 'react';
import './Loader.scss';

interface Props {
    size?: string
}

const Loader: FC<Props> = ({ size }) => {
    return (
        <div className={classNames('loader d-inline-block', { small: size === 'small' } )} />
    );
};

export default Loader;
