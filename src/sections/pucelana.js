/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import Zagales from 'assets/zagales.jpg';
import Tasquita from 'assets/tasquita.jpg';
import Corcho from 'assets/corcho.jpg';
import Bacalao from 'assets/donbacalao.jpg';
import Villaparamesa from 'assets/villaparamesa.jpg';
import Jero from 'assets/jero.jpg';
import Bodeguita from 'assets/bodeguita.jpg';
import Vinotinto from 'assets/vinotinto.jpg';
import Carcava from 'assets/carcava.jpg';
import Troya from 'assets/troya.jpg';
import Bar from 'assets/bar.jpg';
import Iborra from 'assets/iborra.jpg';
import SectionHeader from 'components/section-header';


/*

Zagales
Tasquita
Corcho
Alarcón
Villaparamesa
Jero
Bodeguita
Antiguo Puchero
Cárcava
Caballo de Troya
El Bar
Helados Iborra

*/

export default function Pucelana() {
  return (
    <section id = "pucelana" sx={{ variant: 'section.coreFeature' }}>
      <br />

      <SectionHeader 
        title = "LA PUCELANA"
        slogan = "Para los que venís de fuera, hemos preparado "
        slogan3 = "Un recorrido con los restaurantes que más nos gustan para poder tapear como un pucelano más"
        slogan4 = "¡Ah! No olvides pedir tu tapa con un buen vino de la tierra."
      />

      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle="Zagales"
            title="C/ Pasión, 13, Valladolid"
            description="Recomendaciones: El Tigretostón y el Obama en la Casa Blanca."
            description2=""
            description3=""
            btnName=""
            btnURL=""
          />
        </Box>

        <Box sx={styles.thumbnail}>
          <Image src={Zagales} alt="Zagales" />
        </Box>
        
      </Container>
      

      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle="Tasquita"
            title="C/ de la Caridad, 2, Valladolid"
            description="Recomentación: Solomillo al Roquefort, imprescindible."
            description2="Las tostas de gambas no están mal, pero no os recomendamos llenar el buche en las primeras paradas de la ruta."
            description3=""
            btnName=""
            btnURL=""
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={Tasquita} alt="Tasquita" />
        </Box>
      </Container>

      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle="Corcho"
            title="C/ Correos, 2, Valladolid"
            description="Recomendación: Croqueta"
            description2="Este es el ritual: Entrar - Pedir croqueta - Disfrutar."
            description3=""
            btnName=""
            btnURL=""
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={Corcho} alt="Corcho" />
        </Box>
      </Container>

      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle="santi - El Caballo de Troya"
            title="C/ Correo, 1, Valladolid"
            description="Recomendación: Albóndiga y Croqueta"
            description2=""
            description3=""
            btnName=""
            btnURL=""
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={Troya} alt="Caballo de Troya" />
        </Box>
      </Container>

      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle="Vinotinto"
            title="C/ Campanas, 4, Valladolid"
            description="Recomendación: Carne a la parrilla."
            description2=""
            description3=""
            btnName=""
            btnURL=""
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={Vinotinto} alt="vinotinto" />
        </Box>
      </Container>

      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle="Villa Paramesa"
            title="Plaza Martí y Monsó, 4, Valladolid"
            description="Recomendaciones: Los Tres cerditos y Ceviche de Sardina"
            description2=""
            description3=""
            btnName=""
            btnURL=""
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={Villaparamesa} alt="Villaparamesa" />
        </Box>
      </Container>

      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle="Jero"
            title="C/ Calle Correos, 11, Valladolid"
            description="Recomendaciones: La variedad de tapas de este sitio es brutal, así que la recomendación es acercarse a la barra y elegir lo que más os entre por los ojos."
            description2=""
            description3=""
            btnName=""
            btnURL=""
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={Jero} alt="Jero" />
        </Box>
      </Container>

      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle="Bodeguita"
            title="C/ Correos, 13, Valladolid"
            description="Recomendaciones: Bravas y Albóndigas"
            description2="Para los que se atrevan con la casquería, es buen sitio para comer crestas."
            description3=""
            btnName=""
            btnURL=""
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={Bodeguita} alt="Bodeguita" />
        </Box>
      </Container>

      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle="Don Bacalao"
            title="Plaza de Sta. Brígida, 5, Valladolid"
            description="Recomendación: Lechazo Taj Mahal."
            description2=""
            description3=""
            btnName=""
            btnURL=""
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={Bacalao} alt="donBacalao" />
        </Box>
      </Container>

      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle="Cárcava"
            title="C/ Cascajares, 2, Valladolid"
            description="Recomendación: Lo mejor en este sitio es pedir Tostas variadas según disponibilidad en carta."
            description2=""
            description3=""
            btnName=""
            btnURL=""
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={Carcava} alt="Carcava" />
        </Box>
      </Container>


      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle="El Bar"
            title="C/ Menéndez Pelayo, 8, Valladolid"
            description="Recomendación: Tarta de queso con chocolate blanco"
            description2="Vais a acertar con todo lo que pidáis en El Bar, pero a nosotros nos vuelve locos su tarta de queso"
            description3=""
            btnName=""
            btnURL=""
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={Bar} alt="El Bar" />
        </Box>
      </Container>

      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle="Iborra"
            title="C/ Lencería, 2"
            description= ""
            description2="Helados muy vallisoletanos y mucho vallisoletanos."
            description3=""
            btnName=""
            btnURL=""
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={Iborra} alt="Iborra" />
        </Box>
      </Container>

      
      <SectionHeader 
        slogan4 = "¡Ah! No olvides pedir tu tapa con un buen vino de la tierra (os recomendamos Ribera de Duero para el vino tinto, y Rueda para el vino blanco)"
      />

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
