import Button from '../Button/Button';
import s from './Offer.module.scss';

const Offer = () => {
  return (
    <div className={s.bg}>
      <section
        className={s.offer + ' container d-flex justify-content-between al-items-center'}
        id="offer">
        <div className={s.invest}>
          <img alt="web" src="./images/web.png" />
          <h3>Why invest in SpiderShiba Inu?</h3>
          <p>
            in case you have lived in a cave in the last few months we will give you a brief summary
            of what happened in crypto industry
          </p>
          <Button onClick={() => {}}>Learn more about SpiderShiba</Button>
        </div>
        <div className={s.cards + ' d-flex f-d-column'}>
          <div className={s.card + ' d-flex'}>
            <div className={s.cube + ' d-flex al-items-center justify-content-center '}>
              <svg
                width="59"
                height="40"
                viewBox="0 0 59 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.7806 0C35.5892 0 33.8128 1.78311 33.8128 3.98269C33.8128 6.18228 35.5892 7.96539 37.7806 7.96539H45.4849L30.8276 23.2326L23.5072 15.8849C22.7557 15.1306 21.7341 14.7104 20.6713 14.7185C19.6085 14.7266 18.5934 15.1624 17.8534 15.9281L1.11928 33.2442C-0.406496 34.823 -0.368242 37.3444 1.20473 38.8759C2.7777 40.4074 5.28973 40.369 6.81551 38.7901L20.7446 24.3767L28.0743 31.7338C28.8274 32.4897 29.8517 32.91 30.9167 32.9001C31.9818 32.8902 32.9981 32.451 33.7372 31.6811L51.0644 13.6329V20.9524C51.0644 23.152 52.8409 24.9351 55.0323 24.9351C57.2237 24.9351 59.0002 23.152 59.0002 20.9524V3.98269C59.0002 1.78311 57.2237 0 55.0323 0L37.7806 0Z"
                  fill="url(#paint0_linear_39_534)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_39_534"
                    x1="29.4999"
                    y1="0"
                    x2="29.4999"
                    y2="39.9999"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E75C5C" />
                    <stop offset="1" stopColor="#E13600" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h4>Massive trend</h4>
              <p>
                Shiba inu has invaded the market with an infinity of other meme coins that collect
                thousands of BNB and after the launch they make mind-boggling numbers!
              </p>
            </div>
          </div>
          <div className={s.card + ' d-flex'}>
            <div className={s.cube + ' d-flex al-items-center justify-content-center '}>
              <svg
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.8551 2.50405C20.9522 0.262781 24.1468 0.262778 25.244 2.50405L29.75 11.7086C30.1847 12.5966 31.029 13.2134 32.007 13.3575L42.1293 14.8493C44.5813 15.2107 45.5623 18.221 43.794 19.9577L36.4428 27.1772C35.7422 27.8653 35.4227 28.8526 35.5873 29.8207L37.3173 39.991C37.7348 42.4453 35.1538 44.3108 32.9544 43.1445L23.9549 38.3725C23.0759 37.9064 22.0231 37.9064 21.1441 38.3725L12.1447 43.1445C9.94524 44.3108 7.36426 42.4453 7.78173 39.991L9.51168 29.8207C9.67634 28.8526 9.35682 27.8653 8.65623 27.1772L1.30505 19.9577C-0.463277 18.221 0.517692 15.2107 2.96971 14.8493L13.092 13.3575C14.0701 13.2134 14.9143 12.5966 15.349 11.7086L19.8551 2.50405Z"
                  fill="url(#paint0_linear_39_533)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_39_533"
                    x1="12.3659"
                    y1="2.458"
                    x2="23.6576"
                    y2="42.6752"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.0001" stopColor="#FFED8C" />
                    <stop offset="1" stopColor="#F4B335" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h4>100% of value, 0% of memecoin!</h4>
              <p>
                We took the best from this trend and have decided to ride this tremendous wave
                success in Shiba Inu tokens, not only by launching a coin, but by creating a real
                NFT game p2e
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
