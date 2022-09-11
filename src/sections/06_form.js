/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Text, Box, Button } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TextFeature from 'components/text-feature';

const data = {
  btnName: 'FORMULARIO',
  btnURL: 'https://forms.gle/zokFAafH5xj8YYP66',
};

export default function Art() {
  
  return (
      <Container sx={styles.container}>
          <Text><br /></Text>
          <SectionHeader
            title = "ASISTENCIA"
            slogan4="POR FAVOR, NOS AYUDÁIS MUCHO SI COMPLETÁIS EL SIGUIENTE FORMULARIO CONFIRMANDO VUESTRA ASISTENCIA"
          />

          <Box sx={styles.button}>
            <TextFeature
              btnName={data.btnName}
              btnURL={data.btnURL}
            />
            

          </Box>
      </Container>
  );
}

const styles = {
  banner: {
    pt: ['20px', '145px', '155px', '170px', null, null, '80px', '50px'],
    pb: [2, null, 0, null, 2, 0, null, 7],
    position: 'relative',
    zIndex: 2
  },
  container: {
    pt: ['20px', '145px', '155px', '170px', null, null, '80px', '50px'],
    pb: [7, null, 0, null, 2, 0, null, 7],
    alignItems: 'center',
  },
  button: {
    ml: ['0px', '0px', '0px', '270px', '395px', '480px', '180px', '538px'],
    
  }
};
