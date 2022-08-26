import { FC } from 'react';
import s from './Face.module.scss';

export interface IFace {
  name: string;
  jobTitle: string;
  urlImg: string;
}

const Face: FC<IFace> = ({ name, jobTitle, urlImg }: IFace) => {
  return (
    <div className={s.face}>
      <img src={urlImg} alt={name} />
      <div className={s.name}>{name}</div>
      <div className={s.jobTitle}>{jobTitle}</div>
    </div>
  );
};

export default Face;
