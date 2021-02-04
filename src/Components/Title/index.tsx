import React from 'react';
import styles from './Title.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Title({ children }: Props) {
  return <div className={cx('App')}>{children}</div>;
}

interface Props {
  children: string;
}
