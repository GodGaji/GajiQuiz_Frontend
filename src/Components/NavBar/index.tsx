import React from 'react';
import styles from './NavBar.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function NavBar({ title }: Props) {
  return (
    <div className={cx('App')}>
      {title === undefined ? <div>Logo</div> : <div>{title}</div>}
    </div>
  );
}

interface Props {
  title?: string;
}
