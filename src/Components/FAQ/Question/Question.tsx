import { FC } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { IQuestion } from '../questions';
import s from './Question.module.scss';

interface IQuestionProps {
  active: boolean;
  onClick: () => void;
}

const Question: FC<IQuestionProps & IQuestion> = ({
  active,
  title,
  description,
  onClick,
}: IQuestionProps & IQuestion) => {
  return (
    <motion.div className={s.question}>
      <div className={s.header + ' d-flex justify-content-between al-items-center'}>
        <p className={s.title}>{title}</p>
        <motion.button className={s.button} onClick={onClick} whileHover={{ scale: 1.12 }}>
          <img
            className={cn(s.arrow, { [s.activeArrow]: active })}
            alt="look"
            src="./images/Arrow1.svg"
          />
        </motion.button>
      </div>
      {active && (
        <motion.p
          className={s.description}
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}>
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Question;
