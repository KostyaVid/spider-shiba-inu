import { IRoad } from '../road';
import { motion } from 'framer-motion';
import cn from 'classnames';
import s from './RoadCard.module.scss';

const RoadCard = ({ id, data, actions, isFuture }: IRoad) => {
  return (
    <motion.div
      className={cn(s.roadCard, 'd-flex al-items-center', { [s.future]: isFuture })}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}>
      <div className={s.num}>{id + 1}</div>
      <div>
        <p>{data}</p>
        <ul>
          {actions.map((elem, index) => (
            <li key={'id' + index}>{elem}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default RoadCard;
