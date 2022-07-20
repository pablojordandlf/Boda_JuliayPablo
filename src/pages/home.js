import React from 'react';

import Layout from 'components/layout';

import Banner_Boda from '../sections/01_banner_boda';
import Bienvenida from '../sections/02_bienvenida';
import WorkFlow from '../sections/03_workflow';
import Detalle_01 from '../sections/04_detalle_01';
import Detalle_02 from '../sections/04_detalle_02';
import Regalo from '../sections/99_regalo';
import Hoteles from '../sections/06_hoteles'

import useRouter from 'next/router'

import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

export default function Home() {
  console.log(getCookieConsentValue());
  return (
    <Layout>

      <Banner_Boda />
      <Bienvenida />
      <WorkFlow /> {/*INFORMACIÓN BÁSICA*/}
      <Detalle_01 />
      <Hoteles />
      
      <Regalo />

      

      {/*<TestimonialCard /> TESTIMONIOS DE LA PEÑITA*/}
      {/*<TeamSection /> EQUIPO*/}
      <br />

      
      <CookieConsent
        debug={true}
        buttonText="Permitir"
        //enableDeclineButton
        //declineButtonText="No Permitir"
        hideOnAccept={true}
        cookieValue={true}

      >
          Utilizamos cookies propias y de terceros durante la navegación por el sitio web, con la finalidad de permitir el acceso a las funcionalidades de la página web, extraer estadísticas de tráfico y mejorar la experiencia del usuario.
          
          <button onClick={() => useRouter.replace('/cookies')}>
            Leer más
          </button>
      </CookieConsent>
      
    </Layout>
    
  );
  
}

const styles = {
  banner: {
    pt: ['20px', '145px', '155px', '170px', null, null, '180px', '175px'],
    pb: [2, null, 0, null, 2, 0, null, 7],
    position: 'relative',
    zIndex: 2
  },
};

