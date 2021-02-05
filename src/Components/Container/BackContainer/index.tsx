import React, { CSSProperties } from 'react';
import styles from './BackContainer.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function BackContainer({ children, color, option }: Props) {
  let style: CSSProperties;

  if (option === 'notScroll') {
    style = { overflowY: 'hidden', backgroundColor: color };
  } else {
    style = { backgroundColor: color };
  }

  return (
    <>
      <div className={cx('App')} style={style}>
        {children}
      </div>
    </>
  );
}

interface Props {
  children: JSX.Element;
  color?: string;
  option?: string;
}
