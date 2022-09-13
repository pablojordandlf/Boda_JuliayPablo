/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaHotel } from 'react-icons/fa';

import Hotel1 from 'assets/01_Enara.png';
import Hotel2 from "assets/01_Gareus.png";
import Hotel3 from "assets/01_zenit_elcoloquio.png";
import Hotel_4 from "assets/felipe_iv.png";
import Hotel5 from "assets/olid.png";

const data = [
  {
    id: 1,
    imgSrc: Hotel1,
    altText: 'HOTEL ENARA',
    title: 'HOTEL ENARA',
    phone:'983 30 02 11',
    designation: '-10% Descuento',
    designation2: '',
    designation3: '',
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
    imgSrc: Hotel2,
    altText: 'HOTEL GAREUS',
    title: 'HOTEL GAREUS',
    phone:'983 21 43 33',
    designation: '-10% Descuento',
    designation2: '',
    designation3: '',
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
    imgSrc: Hotel3,
    altText: 'HOTEL COLOQUIO DE LOS PERROS',
    title: 'HOTEL COLOQUIO DE LOS PERROS',
    phone:'983 04 40 35',
    designation: '-5€ / noche y habitación',
    designation2: '',
    designation3: '',
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
  {
    id: 4,
    imgSrc: Hotel_4,
    altText: 'HOTEL FELIPE IV',
    title: 'HOTEL FELIPE IV',
    phone:'983 30 70 00',
    designation: 'Precio: 88 € / noche y habitación',
    designation2: '',
    designation3: '',
    socialProfile: [
      {
        id: 1,
        name: 'LinkedIn',
        path: 'https://www.hfelipeiv.com/es/',
        icon: <FaHotel />,
      },
    ],
    email: ""
  },
  {
    id: 5,
    imgSrc: Hotel5,
    altText: 'HOTEL OLID',
    title: 'HOTEL OLID',
    phone:'983 35 72 00',
    designation: 'Precio: 70 € habitación doble',
    designation2: 'Precio: 62 € habitación individual',
    designation3: 'Precio: 85 € hab. doble + supletoria',
    socialProfile: [
      {
        id: 1,
        name: 'LinkedIn',
        path: 'https://www.hotelolid.com/',
        icon: <FaHotel />,
      },
    ],
    email: "reservas@hotelolid.com"
  },

];

export default function TeamSection() {
  return (
    <section id="alojamiento">
      <Container>
        <SectionHeader
            title = "ALOJAMIENTOS"
          />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              designation2={item.designation2}
              designation3={item.designation3}
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


