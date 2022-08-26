import { motion } from 'framer-motion';
import { linksConquer } from '../../../links';
import s from './Partners.module.scss';

const Partners = () => {
  return (
    <section className={s.partners} id="partners">
      <div className="container">
        <h2>Partners & Investors</h2>
        <div className={s.links + ' d-flex justify-content-between'}>
          {linksConquer.map((link, index) => (
            <motion.img
              alt={link.name}
              key={'id' + index}
              src={link.urlImg}
              whileHover={{ scale: 1.1, opacity: 1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
