import React from 'react';

import Layout from 'components/layout';

import Banner_Boda from '../sections/01_banner_boda';
import Bienvenida from '../sections/02_bienvenida';
import WorkFlow from '../sections/03_workflow';
import Detalle_01 from '../sections/04_detalle_01';
import Detalle_02 from '../sections/04_detalle_02';
import Regalo from '../sections/99_regalo';
import Hoteles from '../sections/05_hoteles';
import Form from '../sections/06_form';

import useRouter from 'next/router'

import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

export default function Home() {
  const dateTime = new Date("06/03/2023 17:59:59").getTime();

  return (
    <Layout>

      <Banner_Boda />
      <Bienvenida targetDate={dateTime}/>
      <WorkFlow /> {/*INFORMACIÓN BÁSICA*/}
      <Detalle_01 />
      <Hoteles />
      <Form />
      <Regalo />
      
      <br />
      
      {/*<CookieConsent
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
      </CookieConsent>*/}
      
    </Layout>
    
  );
  
}
