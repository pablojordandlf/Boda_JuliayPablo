/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container } from 'theme-ui';
import SectionHeader from 'components/section-header';


export default function Art() {
  
  return (
    <section sx={styles.banner}>
      <Container>
        <SectionHeader
          slogan=""
          title="BIENVENIDOS"
          slogan2="ESTAMOS MUY FELICES DE QUE PODÁIS COMPARTIR CON NOSOTROS UN DÍA TAN IMPORTANTE"
        />
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['20px', '145px', '155px', '170px', null, null, '180px', '175px'],
    pb: [2, null, 0, null, 2, 0, null, 7],
    position: 'relative',
    zIndex: 2
  }
};
