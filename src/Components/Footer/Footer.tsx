import { linksSoc } from '../../links';
import { motion } from 'framer-motion';
import Button from '../Button/Button';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={s.bg}>
        <section className={s.mainFooter + ' container'} id="community">
          <h2>Join our SpiderShib Inu Community</h2>
          <div className={s.links}>
            {linksSoc.map((elem, index) => (
              <motion.a
                key={'id' + index}
                href={elem.url}
                className={s.link}
                whileHover={{ rotate: 10 }}
                whileTap={{ scale: 1.1 }}>
                <img alt={elem.name} src={elem.urlImg} />
              </motion.a>
            ))}
          </div>
          <div className={s.images}>
            <img
              alt="map"
              srcSet="./images/footer/map.png, ./images/footer/map-2x.png 2x"
              src="./images/footer/map.png"
              className={s.map}
            />
            <img
              srcSet="./images/spidershiba-1x.png, ./images/spidershiba-2x.png 2x"
              src="./images/spidershiba-1x.png"
              alt="logo Spider Shiba"
              className={s.shiba}
            />
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
        </section>
      </div>
      <div className={s.subFooter + ' container'}>
        <p>Copyright © 2021 SpiderShiba Inu. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
