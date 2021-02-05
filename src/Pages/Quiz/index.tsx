import React, { useState } from 'react';
//import { useLocation } from 'react-router';
import LayoutContainer from '../../Components/Container/LayoutContainer';
import NavBar from '../../Components/NavBar';
import Timer from '../../Components/Timer';
import Title from '../../Components/Title';
import Type from './Type';

const data = {
  id: 1, //theme id
  title: 'theme title', //theme title
  exam: [
    {
      type: 1, // 4 text
      question: 'question 1',
      answer: ['example 1', 'example 2', 'example 3', 'example 4'],
    },
    {
      type: 2, // 4 image
      question: 'question 2',
      answer: ['image path 1', 'image path 2', 'image path 3', 'image path 4'],
    },
    {
      type: 3, // ox
      question: 'question 3',
    },
  ],
};

export default function Quiz() {
  //const themeId = useLocation().pathname.split('/')[2];
  const [count, setCount] = useState<number>(0);
  const [choices, setChoice] = useState<number[]>([]);

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const choice = e.currentTarget.value;
    setChoice((choices) => [...choices, choice]);

    if (count + 1 >= data.exam.length) {
      alert('님다풀음!');
    }

    setCount(count + 1);
  }; //선택한 답 저장

  return (
    <LayoutContainer option="notScroll">
      <>
        <NavBar title={data.title} />

        <Title>{data.exam[count].question}</Title>

        <Type
          type={data.exam[count].type}
          exam={data.exam[count].answer}
          handleClick={onClick}
        />

        <Timer answer={choices} />
      </>
    </LayoutContainer>
  );
}
