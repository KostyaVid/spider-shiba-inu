import s from './Play.module.scss';

const Play = () => {
  return (
    <section className={s.play + ' container'} id="play">
      <h2>Play to earn</h2>
      <p className={s.subTitle}>Many ways to earn tokens and NFTs</p>
      <article className={s.game + ' d-flex al-items-center'}>
        <div className={s.picture}>
          <img
            className={s.city}
            alt="picture from the game"
            srcSet="./images/Play/city.png, ./images/Play/city-2x.png 2x"
            src="./images/Play/city.png"
          />
          <img
            className={s.shiba}
            srcSet="./images/spidershiba-1x.png, ./images/spidershiba-2x.png 2x"
            src="./images/spidershiba-1x.png"
            alt="logo Spider Shiba"
          />
          <img
            className={s.goblin}
            srcSet="./images/Play/goblin.png, ./images/Play/goblin-2x.png 2x"
            src="./images/Play/goblin.png"
            alt="logo Spider Shiba"
          />
        </div>
        <div>
          <h3>Game plot and goal</h3>
          <p>
            Mary Jane has been kidnapped by Green Goblin, who has no intention of letting her
            escape, so she flees to New York City, going through different scenarios that will be
            part of the game!
          </p>
          <p>
            The goal is to accumulate as many game coins and points as possible, which will then be
            transformed into the game token based also on the attempts used to complete the level.
          </p>
          <p>
            Once the Green Goblin is defeated and Mary Jane is safed, the game is over, but we don't
            stop there!
          </p>
        </div>
      </article>
      <div className={s.cards + ' d-flex'}>
        <article className={s.card + ' d-flex al-items-center'}>
          <img
            className={s.cardImg}
            alt="coin"
            srcSet="./images/Play/Coin.png, ./images/Play/Coin-2x.png 2x"
            src="./images/Play/Coin.png"
          />
          <div>
            <h3>Earn that cash!</h3>
            <p>
              In the various levels there will also be special coins, more difficult to take, which
              will provide you with bonuses in tokens or game NFTs!
            </p>
          </div>
        </article>
        <article className={[s.card, s.card_Megaphone, 'd-flex al-items-center'].join(' ')}>
          <img
            className={s.cardImg}
            alt="Megaphone"
            srcSet="./images/Play/Megaphone.png, ./images/Play/Megaphone-2x.png 2x"
            src="./images/Play/Megaphone.png"
          />
          <div>
            <h3>Game events and challenges</h3>
            <p>
              There will be lots of events after end of the game, that will bring together whole
              community and you can participate in challenges with the NFTs!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Play;
