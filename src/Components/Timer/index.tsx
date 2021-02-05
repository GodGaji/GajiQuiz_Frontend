import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Timer({ answer }: Props) {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(countdown);
        alert('끗!');
        console.log(answer);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [seconds]);

  return <div className={cx('App')}>{seconds}</div>;
}

interface Props {
  answer: number[];
}
