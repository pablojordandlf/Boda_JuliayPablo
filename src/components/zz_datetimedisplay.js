import React from 'react';
import { Container } from 'theme-ui';
import SectionHeader from 'components/section-header';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div>
      QUEDAN {value} DÍAS
    </div>
  );
};

export default DateTimeDisplay;
