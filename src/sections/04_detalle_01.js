/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import FeatureThumb from 'assets/Valladolid1.jpg';

const data = {
  subTitle: 'Transporte',
  title: 'CÓMO LLEGAR A VALLADOLID',
  description1: '🚆 TREN (1 hora)',
  description2: '🚗 COCHE / BUS (2 horas)',
  description3: '✈️ AVIÓN A MADRID + 🚆 TREN',
  btnName: 'Web Renfe',
  btnURL: 'https://venta.renfe.com/vol/search.do?c=_7QRn',
};

export default function CoreFeature() {
  return (
    <section id = "transporte" sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description1}
            description2={data.description2}
            description3={data.description3}
            btnName={data.btnName}
            btnURL={data.btnURL}
            
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pt: [6, 7, 0, null, 8],
    pb: [0, 7, 0, null, 0],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: ['auto', 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },

};
