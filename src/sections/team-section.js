/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import Member1 from 'assets/team/pablo.jpg';
import Member2 from 'assets/team/Julia.jpg';

const data = [
  {
    id: 1,
    imgSrc: Member2,
    altText: 'Julia Sánchez',
    title: 'Julia Sánchez',
    designation: 'Founder',
    socialProfile: [
      {
        id: 1,
        name: 'LinkedIn',
        path: 'https://www.linkedin.com/in/julia-sanchez08/',
        icon: <FaLinkedin />,
      },
    ],
    email: ""
  },
  {
    id: 2,
    imgSrc: Member1,
    altText: 'Pablo Jordán',
    title: 'Pablo Jordán',
    designation: 'Founder',
    socialProfile: [
      {
        id: 1,
        name: 'LinkedIn',
        path: 'https://www.linkedin.com/in/pablojordan/',
        icon: <FaLinkedin />,
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
    <section id="team">
      <Container>
        <SectionHeader
          slogan="Equipo Concept"
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
