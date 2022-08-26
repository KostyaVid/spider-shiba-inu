import HowCard from './HowCard/HowCard';
import s from './HowWorks.module.scss';

const HowWorks = () => {
  return (
    <section className={s.howWorks + ' container'} id="howWorks">
      <h2>How it works?</h2>
      <div className={s.cards + ' d-flex justify-content-center'}>
        <HowCard urlImg="./images/HowWorks/red.svg">
          <h3>SpiderShib Inu Ecosystem</h3>
          <p className={s.card__SubTitle}>
            Large variety of options to use SpiderShib Inu tokens and NFTs
          </p>
          <p className={s.card__description}>
            Our ecosystem is different from all the others, we have created the first REAL nft game
            with SpiderShib Inu.
          </p>
          <p className={s.card__description}>
            So the tokens will have real usefulness and to ensure constant growth for all holders.
          </p>
        </HowCard>
        <HowCard urlImg="./images/HowWorks/yellow.svg">
          <h3>Many options to earn</h3>
          <p className={s.card__SubTitle}>
            Thanks to our ecosystem you will be able to earn passively and actively
          </p>
          <p className={s.card__description}>
            The passive income:
            <span>- staking</span>
            <span>- the appreciation of the staked currency</span>
          </p>
          <p className={s.card__description}>
            The active income:
            <span>- Gaming process (you will earn money that you can turn into tokens)</span>
            <span>- Re-sale of the NFTs</span>
          </p>
        </HowCard>
        <HowCard urlImg="./images/HowWorks/blue.svg">
          <h3>Reshaping DeFi</h3>
          <p className={s.card__SubTitle}>
            We are evolving DeFi concepts such as participation rewards, NFTs and tokenomics to
            maximise profit for every investor
          </p>
          <p className={s.card__description}>
            We offer huge tools for people around the world to take control of their financial
            future.
          </p>
        </HowCard>
      </div>
    </section>
  );
};

export default HowWorks;
