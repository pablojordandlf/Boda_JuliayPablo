/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Text, Heading, Image, Box, Link } from 'theme-ui';

const ArtCard = ({ art }) => {
  return (
    <Link href={`/art/${art.id}`} passHref style={{ textDecoration: 'none' }}>
      <Box sx={styles.card}>
        <Image
          src={art.url}
          alt={art.name}
          sx={styles.thumbnail} />

        <Box sx={styles.infoWrapper}>
          <Heading className="info__name" sx={styles.infoWrapper.name} >
            {art.name}
          </Heading>

          <Text className="info__designation" sx={styles.infoWrapper.artist}>
            {art.artist}
          </Text>

          <Text className="info__designation" sx={styles.infoWrapper.artist}>
            desde {art.price24M}€/mes
          </Text>
        </Box>
      </Box>
    </Link>
  );
}

export default ArtCard;

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    py: [0, null, 4, 5, 6],
    px: [2, null, 6, 7],
    transition: 'ease-in-out 0.4s',
    borderRadius: '8px',
    position: 'relative',
    '&:hover': {
      boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
      '.info__name': {
        color: 'none',
      },
      '.info__designation': {
        color: 'primary',
      },
      '.social__share': {
        opacity: 1,
        a: {
          my: 0,
          py: [0, null, 1],
        },
      },
    },
  },

  memberThumb: {
    width: "300px",
    height: "300px",
    flexShrink: 0,
    border: '2px solid',
    borderColor: 'white',
    borderRadius: '0%',
  },

  thumbnail: {
    borderRadius: '7px 7px 0 0',
    overflow: 'hidden',
    display: 'flex',
    img: {
      width: '100%',
    },
  },

  infoWrapper: {
    width: '100%',
    textAlign: 'center',
    mt: [3, null, 4],
    name: {
      fontSize: [1, 2, 3, null, null, 4],
      fontWeight: 'bold',
      lineHeight: [1.25, 1.35],
      transition: 'color 0.25s',
      mb: 1,
      textDecoration: 'none',
    },
    artist: {
      fontSize: ['14px', null, null, 2],
      fontWeight: 'body',
      lineHeight: 'heading',
      color: 'text',
      transition: 'color 0.25s',
      textDecoration: 'none',
    },
  },

  link: {
    display: "flex",

  },
};
