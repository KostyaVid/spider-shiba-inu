import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Face from './Face/Face';
import { faces } from './faces';
import { useContext } from 'react';
import { BreakPoints } from '../../App';
import 'swiper/scss';
import 'swiper/scss/pagination';
import s from './Team.module.scss';
import './swiperStyle.scss';

const Team = () => {
  const size = useContext(BreakPoints);
  let countSlider = 4;

  switch (size) {
    case 'md':
      countSlider = 3;
      break;
    case 'sm':
      countSlider = 1;
      break;
    case 'xs':
      countSlider = 1;
      break;
  }
  return (
    <section className={s.team} id="team">
      <div className="container">
        <h2>Team</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={countSlider}
          className={s.swiper}
          pagination={{ clickable: true }}>
          {faces.map((elem, index) => (
            <SwiperSlide key={'id' + index}>
              <Face {...elem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
