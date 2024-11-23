import { useState } from 'react';
import s from './List.module.scss';

const rawQuestionList = [
  {
    id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 10,
    createAt: '2021-09-03',
  },
  {
    id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: false,
    answerCount: 10,
    createAt: '2021-09-03',
  },
  {
    id: 'q3',
    title: '问卷3',
    isPublished: true,
    isStar: false,
    answerCount: 10,
    createAt: '2021-09-03',
  },
];

export const List: React.FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList);
  return (
    <div>
      <div className={s.header}>
        <div className={s.left}>
          <h3>问卷名称</h3>
        </div>
        <div className={s.right}>搜索</div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
