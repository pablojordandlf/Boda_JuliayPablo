/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaHotel } from 'react-icons/fa';
import TextFeature from 'components/text-feature';

import Member1 from 'assets/team/HOTEL1.jpg';
import Member2 from 'assets/team/HOTEL1.jpg';

const data = [
  {
    id: 1,
    imgSrc: Member2,
    altText: 'HOTEL ENARA',
    title: 'HOTEL ENARA',
    phone:'983 30 02 11',
    designation: 'Descuento -10%',
    socialProfile: [
      {
        id: 1,
        name: 'HOTEL ENARA',
        path: 'https://www.eleenaraboutiquehotel.com/',
        icon: <FaHotel />,
      },
    ],
    email: ""
  },
  {
    id: 2,
    imgSrc: Member1,
    altText: 'HOTEL GAREUS',
    title: 'HOTEL GAREUS',
    phone:'983 21 43 33',
    designation: '-10% descuento',
    socialProfile: [
      {
        id: 1,
        name: 'LinkedIn',
        path: 'https://www.hotelgareus.com/',
        icon: <FaHotel />,
      },
    ],
    email: ""
  },
  {
    id: 3,
    imgSrc: Member1,
    altText: 'HOTEL COLOQUIO DE LOS PERROS',
    title: 'HOTEL COLOQUIO DE LOS PERROS',
    phone:'983 04 40 35',
    designation: '-5€ / noche y habitación',
    socialProfile: [
      {
        id: 1,
        name: 'LinkedIn',
        path: 'https://elcoloquio.zenithoteles.com/es/',
        icon: <FaHotel />,
      },
    ],
    email: ""
  },

];

export default function TeamSection() {
  return (
    <section id="alojamiento">
      <Container>

        <TextFeature
            subTitle="ALOJAMIENTOS"
        ></TextFeature>

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
              email={item.email}
              phone={item.phone}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
