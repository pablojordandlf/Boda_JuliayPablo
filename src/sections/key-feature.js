/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Accesibilidad',
    title: 'Accesibilidad del Arte',
    text:
      'Concept pretende hacer accesible el arte a través de nuestra modalidad de Suscripción.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Artistas Locales',
    title: 'Artistas Locales',
    text:
      'Damos a conocer a artistas locales a través de nuestra plataforma.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Renovación',
    title: 'Renovación',
    text:
      'Permitimos que puedas darle un toque de aire fresco a tus espacios con facilidad.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Cultura',
    title: 'Apoyo a la Cultura',
    text:
      'Somos fieles defensores de que la cultura tiene que ser una parte fundamental nuestras vidas.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="MISIÓN DE CONCEPT"
          title=""
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
