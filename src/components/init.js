import React from 'react';
import styles from '';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function init({ children }: Props) {
  return <div className={cx('App')}>{children}</div>;
}

interface Props {
  children: JSX.Element;
}
