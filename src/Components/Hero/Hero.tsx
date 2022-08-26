import Button from '../Button/Button';
import s from './Hero.module.scss';
import Light from './Light/Light';

const Hero = () => {
  return (
    <section className={s.hero + ' container'}>
      <div className={s.heroContent}>
        <h1>
          <span className={s.titleSpan}>Who is</span> mr. Spidershiba Inu?
        </h1>
        <p className={s.whoIsShiba}>it's hybrid of Shiba and Spiderman.... but</p>
        <p className={s.titleDescription}>
          It's not only for pump and dump by Elon tweets. This is real NFT game with Achiements,
          Goals and nice gameplay with tokenization
        </p>
      </div>
      <div className={s.buttons}>
        <div className={s.containerButton + ' d-flex justify-content-between'}>
          <Button onClick={() => {}} className={s.buttonJoin}>
            Join Community
          </Button>
          <Button onClick={() => {}} color="outline" className={s.buttonMore}>
            More about SpiderShiba Inu
          </Button>
        </div>
        <Button
          onClick={() => {
            navigator.clipboard.writeText('0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc');
          }}
          color="fill"
          className={s.buttonContract}>
          <div className={s.ContractTitle}>Contract address:</div>
          <p className={s.ContractAddress}>0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc</p>
        </Button>
      </div>
      <div className={s.imageContainer + ' d-flex al-items-center justify-content-center'}>
        <img
          srcSet="./images/spidershiba-1x.png, ./images/spidershiba-2x.png 2x"
          src="./images/spidershiba-1x.png"
          alt="logo Spider Shiba"
        />
      </div>
      <Light width={80} duration={4000} />
      <Light width={20} duration={2000} />
      <Light width={30} color="36, 36, 235" duration={5000} />
      <Light width={40} color="36, 36, 235" doubleColor="225, 29, 29" duration={3500} />
      <Light doubleColor="36, 36, 235" duration={2500} />
      <Light width={20} duration={4500} />
    </section>
  );
};

export default Hero;
