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
          title="NUESTRO MAYOR REGALO SOIS VOSOTROS"
          slogan2=""
          slogan3="PERO SI QUERÉIS HACERNOS UN REGALO, ¡AQUÍ ESTÁ NUESTRO NÚMERO DE CUENTA!"
          slogan4="ES06 0182 5322 2002 0097 6082"
        />
        
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['20px', '145px', '155px', '170px', null, null, '180px', '0px'],
    pb: [2, null, 0, null, 2, 0, null, 7],
    position: 'relative',
    zIndex: 2
  }
};
