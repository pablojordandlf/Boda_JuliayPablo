/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TextFeature from 'components/text-feature';

import { useCountdown } from '../components/useCountdown';
import DateTimeDisplay from '../components/zz_datetimedisplay';


const Bienvenida = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <section sx={styles.banner}>
        
          <SectionHeader
            title2= "BIENVENIDOS"
            slogan3="ESTAMOS MUY FELICES DE QUE PODÁIS COMPARTIR CON NOSOTROS UN DÍA TAN IMPORTANTE"
            slogan4= {<ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />}
          />
        
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
            title2= "VIVAN LOS NOVIOS"
            slogan4="ESTAMOS MUY FELICES DE QUE PODÁIS COMPARTIR CON NOSOTROS UN DÍA TAN IMPORTANTE"
          />
        </Container>
    </section>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Container>
      <TextFeature title = "QUEDAN"/>
      <TextFeature 
        subTitle = {<DateTimeDisplay
          value1={days} type1={'Days'} isDanger1={days <= false}
          value2={hours} type2={'Hour'} isDanger2={hours <= false}
          value3={minutes} type3={'Minute'} isDanger3={minutes <= false}
          value4={seconds} type4={'Second'} isDanger4={seconds <= false}
          /> }
      />
    </Container>
  );
};



const styles = {
  banner: {
    pt: ['30px', '105px', '105px', '100px', null, null, '110px', '85px'],
    pb: [0, null, 0, null, 2, 0, null, 0],
    position: 'relative',
    zIndex: 2,
    
  }
};
