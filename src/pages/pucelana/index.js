import { jsx } from 'theme-ui';
import { Container, Box, Grid } from 'theme-ui';

import Header from 'components/header/header_pucelana';
import Footer from 'components/footer/footer';

import Pucela from "../../sections/pucelana"

import SectionHeader from 'components/section-header';

import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

export default function Pucelana() {
  
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <SectionHeader />
        
        <section id="pucelana" >
            <Pucela />

        </section>
        
        <Footer />
      </ThemeProvider>
    );
    
  }
  