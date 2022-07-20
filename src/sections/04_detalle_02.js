/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import FeatureThumb from 'assets/Valladolid2.jpg';

const data = {
  subTitle: 'Transporte',
  title: 'CÓMO LLEGAR A VALLADOLID',
  description1: '- TREN (1 hora)',
  description2: '- COCHE / BUS (2 horas)',
  description3: '- AVIÓN A MADRID + TREN',
  btnName: 'Web Renfe',
  btnURL: 'https://venta.renfe.com/vol/search.do?c=_7QRn',
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
        </Box>

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
    pt: [0, 7, 0, null, 0],
    pb: [0, 7, 0, null, 0],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 5],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 585],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 6],
    '.description': {
      pr: [0, null, 6, 7, 7],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 0],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
