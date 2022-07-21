/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaHotel } from 'react-icons/fa';

import Member1 from 'assets/team/HOTEL1.jpg';
import Member2 from 'assets/team/HOTEL1.jpg';

const data = [
  {
    id: 1,
    imgSrc: Member2,
    altText: 'HOTEL 1',
    title: 'HOTEL 1',
    designation: '-10% descuento',
    socialProfile: [
      {
        id: 1,
        name: 'HOTEL1',
        path: '',
        icon: <FaHotel />,
      },
    ],
    email: ""
  },
  {
    id: 2,
    imgSrc: Member1,
    altText: 'HOTEL 2',
    title: 'HOTEL 2',
    designation: '-15% descuento',
    socialProfile: [
      {
        id: 1,
        name: 'LinkedIn',
        path: '',
        icon: <FaHotel />,
      },
      {/*
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,  */
      },
    ],
    email: ""
  },
];

export default function TeamSection() {
  return (
    <section id="alojamiento">
      <Container>
        <SectionHeader
          slogan4="ALOJAMIENTOS"
          title=""
        />
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
