/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container } from 'theme-ui';
import SectionHeader from 'components/section-header';


export default function Regalo() {
  
  return (
    <section id = "regalo" sx={styles.banner}>
      <Container>
        <SectionHeader
          slogan=""
          title="ESTE DÍA CORRE POR NUESTRA CUENTA"
          slogan2=""
          slogan3="Y NUESTRA CUENTA ES..."
          slogan4="ES06 0182 5322 2002 0097 6082"
        />
        
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['20px', '145px', '155px', '170px', null, null, '80px', '50px'],
    pb: [2, null, 0, null, 2, 0, null, 7],
    position: 'relative',
    zIndex: 2
  }
};
