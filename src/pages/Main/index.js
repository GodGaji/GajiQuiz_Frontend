import React from 'react';
import styles from './Main.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Main() {
  return <span className={cx('box')}>hello world</span>;
}
