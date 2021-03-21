import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Button({ children }: Props) {
  return (
    <div>
      <button type="button" className={cx('App')}>
        {children}
      </button>
    </div>
  );
}

interface Props {
  children: string;
}
