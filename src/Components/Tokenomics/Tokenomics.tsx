import { useContext } from 'react';
import { BreakPoints } from '../../App';
import { cardsTok } from './CardsTok';
import CardTok from './CardTok/CardTok';
import s from './Tokenomics.module.scss';

const Tokenomics = () => {
  const size = useContext(BreakPoints);
  return (
    <div className={s.wrapper}>
      <section className={s.tokenomics + ' container'} id="tokenomics">
        <h2>Tokenomics</h2>
        <img
          alt="graff"
          src={size === 'sm' || size === 'xs' ? './images/graf-mobile.svg' : './images/graf.svg'}
          className={s.graff}
        />
        <img
          srcSet="./images/spidershiba-1x.png, ./images/spidershiba-2x.png 2x"
          src="./images/spidershiba-1x.png"
          alt="logo Spider Shiba"
          className={s.shiba}
        />
        <div className={s.cards}>
          {cardsTok.map((elem, index) => (
            <div key={'id' + index} className={s.cardTok}>
              <CardTok {...elem} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;
