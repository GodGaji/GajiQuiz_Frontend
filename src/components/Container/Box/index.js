import React from 'react';
import styles from './Box.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Box({ children }: Props) {
  return <div className={cx('App')}>{children}</div>;
}

interface Props {
  children: JSX.Element;
}
