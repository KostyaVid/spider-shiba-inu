import { linksConquer } from '../../links';
import Button from '../Button/Button';
import s from './Conquer.module.scss';
import LinkConquer from './LinkConquer/LinkConquer';

const Conquer = () => {
  return (
    <section className={s.conquer + ' container d-flex f-d-column al-items-center'}>
      <div className={s.links + ' d-flex al-items-center justify-content-center '}>
        {linksConquer.map((link, index) => (
          <LinkConquer key={link.name + index} {...link} />
        ))}
      </div>
      <h2 className={s.title}>
        Yes you read that right, SpiderShib Inu officially enters the game to conquer the world 🌎
      </h2>
      <div className={s.imgContainer}>
        <img
          className={s.shiba}
          srcSet="./images/spidershiba-1x.png, ./images/spidershiba-2x.png 2x"
          src="./images/spidershiba-1x.png"
          alt="Spider Shiba"
        />
        <div className={s.planet}></div>
        <div className={s.web}></div>
        <div className={s.circle_mini}></div>
        <div className={s.circle_middle}></div>
        <div className={s.circle_big}></div>
      </div>
      <Button onClick={() => {}} className={s.button}>
        Let's find out <span className={s.buttonSpan}>more</span>
      </Button>
    </section>
  );
};

export default Conquer;
