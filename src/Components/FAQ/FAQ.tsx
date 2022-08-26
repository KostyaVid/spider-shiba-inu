import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import s from './FAQ.module.scss';
import Question from './Question/Question';
import { questions } from './questions';

const FAQ = () => {
  const [activeQuest, setActiveQuest] = useState<number | null>(null);
  return (
    <div className={s.wrapper}>
      <section className={s.faq + ' container'} id="faq">
        <h2>Frequently Asked Questions</h2>
        <AnimatePresence initial={false}>
          {questions.map((elem, index) => (
            <Question
              key={'id' + index}
              {...elem}
              active={activeQuest === index ? true : false}
              onClick={() => {
                if (activeQuest !== index) {
                  setActiveQuest(index);
                } else {
                  setActiveQuest(null);
                }
              }}
            />
          ))}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default FAQ;
