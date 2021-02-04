import React from 'react';
import styles from './BackContainer.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function BackContainer({ children, color }: Props) {
  return (
    <>
      <div className={cx('App')} style={{ backgroundColor: color }}>
        {children}
      </div>
    </>
  );
}

interface Props {
  children: JSX.Element;
  color?: string;
}
