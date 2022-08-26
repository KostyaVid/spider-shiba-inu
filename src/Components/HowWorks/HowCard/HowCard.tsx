import { ReactNode } from 'react';
import s from './HowCard.module.scss';
interface IHowCardProps {
  urlImg: string;
  children: ReactNode;
}

const HowCard = ({ children, urlImg }: IHowCardProps) => {
  return (
    <article className={s.howCard}>
      <img alt="card" src={urlImg} />
      {children}
    </article>
  );
};

export default HowCard;
