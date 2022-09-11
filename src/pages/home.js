import React from 'react';

import Layout from 'components/layout';

import Banner_Boda from '../sections/01_banner_boda';
import Bienvenida from '../sections/02_bienvenida';
import WorkFlow from '../sections/03_workflow';
import Detalle_01 from '../sections/04_detalle_01';
import Regalo from '../sections/99_regalo';
import Hoteles from '../sections/05_hoteles';
import Form from '../sections/06_form';


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
      
    </Layout>
    
  );
  
}
