import React from 'react';
import { Container } from 'theme-ui';
import SectionHeader from 'components/section-header';

const DateTimeDisplay = ({ value1, type1, isDanger1, value2, type2, isDanger2, value3, type3, isDanger3, value4, type4, isDanger4  }) => {
  return (
    <div>
      {value1}D  {value2}H {value3}M {value4}S
    </div>
  );
};

export default DateTimeDisplay;
