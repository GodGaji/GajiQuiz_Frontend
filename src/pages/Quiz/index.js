import React from 'react';
import styles from './Quiz.module.css';
import classNames from 'classnames/bind';
import LayoutContainer from '../../components/Container/LayoutContainer';

const cx = classNames.bind(styles);

function Quiz({ subject }: Props) {
  return <div className={cx('App')}>quiz page</div>;
}

export default function quiz() {
  return (
    <LayoutContainer>
      <Quiz />
    </LayoutContainer>
  );
}

interface Props {
  subject: String;
}
