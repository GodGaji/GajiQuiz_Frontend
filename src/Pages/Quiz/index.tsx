import React from 'react';
import styles from './Quiz.module.css';
import classNames from 'classnames/bind';
import LayoutContainer from '../../Components/Container/LayoutContainer';

const cx = classNames.bind(styles);

function Quiz({ subject }: Props) {
  return <div className={cx('App')}>quiz page{subject}</div>;
}

export default function quiz() {
  return (
    <LayoutContainer>
      <Quiz subject="" />
    </LayoutContainer>
  );
}

interface Props {
  subject: string;
}
