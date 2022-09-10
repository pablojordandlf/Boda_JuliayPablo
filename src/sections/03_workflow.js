/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Images from 'components/image';

import PatternBG from 'assets/fondo2.jpg';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';
import preboda from 'assets/preboda1.png'
import misa from 'assets/misa.png'
import fiesta from 'assets/fiesta.png'
import desayuno from 'assets/desayuno.png'

const data = [
  {
    id: 1,
    title: 'PRE-BODA',
    fecha: '📅 2 de junio',
    lugar: '📍 Sigue tu Pucelana y nos vemos',
    lugar2: 'a las 23:00 en Café Julepe',
    image: preboda
  },
  {
    id: 2,
    title: 'CEREMONIA',
    fecha: '📅 18:00, 3 de junio 2023',
    lugar: '📍 Parroquia del Santísimo Salvador, Valladolid',
    image: misa
  },
  {
    id: 3,
    title: 'CELEBRACIÓN',
    fecha: '📅 20:00, 3 de junio 2023',
    lugar: '📍 Finca Lago de Maíto',
    image: fiesta
  },
  {
    id: 4,
    title: 'DESAYUNO POST-BODA',
    fecha: '📅 4 de junio 2023',
    lugar: '📍 Café Ibérico (C/ Acera de Recoletos, 6, Valladolid)',
    image: desayuno
  },
];

export default function WorkFlow() {
  return (
    <section id = "workflow" sx={styles.workflow}>
      <Container>
        <SectionHeader
          subtitle="INFORMACIÓN BÁSICA"
          isWhite={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              
              <Images src = {item.image} sx={styles.iconBox}/>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.fecha}</Text>
                <Text sx={styles.wrapper.subTitle}>{item.lugar}</Text>
                <Text sx={styles.wrapper.subTitle}>{item.lugar2}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 9],
  },
  grid: {
    mb: -1  ,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
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
