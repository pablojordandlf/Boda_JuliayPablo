import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ subtitle, title, title2, title3, slogan, slogan2, slogan3, slogan4, isWhite }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      
      <Text
        as="p"
        sx={{
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
          fontSize: [ 20, 30],
        }}
      >
        {subtitle}
      </Text>

      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'white' : 'heading', 
        }}
      >
        {title}
      </Heading>

      <Heading
        as="h2"
        sx={{
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
          fontSize: [ 35, 55, 75],
        }}
      >
        {title2}
      </Heading >

      <Heading
        as="h2"
        sx={{
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
          fontSize: [ 30, 40, 55],
        }}
      >
        {title3}
      </Heading >

      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan2}
      </Text>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan3}
      </Text>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan4}
      </Text>
    </Box>
  );
}
