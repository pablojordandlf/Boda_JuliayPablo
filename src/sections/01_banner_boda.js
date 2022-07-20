/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button, Flex } from 'theme-ui';
import BannerImg from 'assets/STD3.png';


export default function Banner_Boda() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Julia y Pablo
          </Heading>
          <Text as="p" variant="heroSecondary">
            Valladolid<br />
            3 de junio, 2023 <br />
          </Text>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="banner"/>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '115px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
    },
    
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: ['wrap', null, null, 'nowrap'],
    },
    
    contentBox: {
      flexShrink: 0,

      width: ['100%', 450, 550, '350px', '410px', '485px'],
      mx: 'auto',
      pb: ['0px', null, null, 0],
      '.description': {
        pr: [0, null, null, null, 4],
      },
    },
    imageBox: {
      display: ['flex', null, null, 'flex'],
      justifyContent: 'center',
      ml: ["0px", null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
      mt: ["-70px", null, null, '40px', 4, 7, 0],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
      width: '100%',
    },
  },
};
