import { FC } from 'react';
import s from './CardTok.module.scss';

export interface ICardTokProps {
  title: string;
  description: string;
  widthLine: number;
  colorLine: string;
  widthLine2?: number;
  colorLine2?: string;
}

const CardTok: FC<ICardTokProps> = ({
  title,
  description,
  widthLine,
  colorLine,
  widthLine2,
  colorLine2,
}: ICardTokProps) => {
  return (
    <section className={s.cardTok}>
      <div
        className={s.line}
        style={{
          width: `calc(${widthLine}% / 1.5)`,
          backgroundColor: `${colorLine}`,
        }}></div>
      {widthLine2 && (
        <div
          className={s.line}
          style={{
            width: `calc(${widthLine2}% / 1.5)`,
            backgroundColor: `${colorLine2}`,
          }}></div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
};

export default CardTok;
