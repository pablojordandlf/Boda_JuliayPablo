/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container } from 'theme-ui';
import SectionHeader from 'components/section-header';

import { useCountdown } from '../components/useCountdown';
import DateTimeDisplay from '../components/zz_datetimedisplay';



const Bienvenida = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <section sx={styles.banner}>
        <Container>
          <SectionHeader
            title= "BIENVENIDOS"
            slogan4= {<ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />}
            slogan2="ESTAMOS MUY FELICES DE QUE PODÁIS COMPARTIR CON NOSOTROS UN DÍA TAN IMPORTANTE"
          />
        </Container>
      </section>
    );
  }

}
export default Bienvenida;

const ExpiredNotice = () => {
  return (
    <section sx={styles.banner}>
        <Container>
          <SectionHeader
            title= "BIENVENIDOS"
            slogan= "VIVAN LOS NOVIOS"
            slogan4="ESTAMOS MUY FELICES DE QUE PODÁIS COMPARTIR CON NOSOTROS UN DÍA TAN IMPORTANTE"
          />
        </Container>
    </section>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
      <SectionHeader
        slogan= {<DateTimeDisplay value={days} type={'Days'} isDanger={days <= false}/> } 
      />
  );
};



const styles = {
  banner: {
    pt: ['60px', '145px', '155px', '170px', null, null, '180px', '175px'],
    pb: [0, null, 0, null, 2, 0, null, 0],
    position: 'relative',
    zIndex: 2
  }
};
