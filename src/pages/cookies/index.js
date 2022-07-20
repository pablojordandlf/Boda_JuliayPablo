/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Text, Heading, Link } from 'theme-ui';

import Layout from 'components/layout';

import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../../contexts/app/app.provider';
import theme from 'theme';
import SectionHeader from 'components/section-header';

export default function success( {products}) {
  
  return (

    <ThemeProvider theme={theme}>
        <StickyProvider>
            <Layout>
                <section sx={styles.banner} id="cookies">
                    <SectionHeader />
                    <Container sx={styles.banner.container}>
                        <SectionHeader
                            slogan=""
                            title="POLÍTICA DE COOKIES"
                        />
                    </Container>
                    <Container>
                      <Text>
                        En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, esta página web le informa, en esta sección, sobre la política de recogida y tratamiento de cookies.
                      </Text>
                      <br />
                      <br />

                      <Heading as="h3" sx={styles.title}>
                        ¿Qué son las Cookies?
                      </Heading>
                      <Text>
                        Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
                      </Text>
                      <br />
                      <br />

                      <Heading as="h3" sx={styles.title}>
                        ¿Qué tipos de cookies utiliza esta página web?
                      </Heading>
                      <Text>
                        Esta página web utiliza los siguientes tipos de cookies:
                        <br />
                        - Cookies de análisis: Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.
                        <br />
                        - Cookies técnicas: Son aquellas que permiten al usuario la navegación a través del área restringida y la utilización de sus diferentes funciones, como por ejemplo, llevar a cambio el proceso de compra de un artículo.
                        <br />
                        - Cookies de personalización: Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma o el tipo de navegador a través del cual se conecta al servicio.
                        <br />
                        - Cookies publicitarias: Son aquéllas que, bien tratadas por esta web o por terceros, permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello podemos analizar sus hábitos de navegación en Internet y podemos mostrarle publicidad relacionada con su perfil de navegación.
                        <br />
                        - Cookies de publicidad comportamental: Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Este tipo de cookies almacenan información del comportamiento de los visitantes obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar avisos publicitarios en función del mismo.
                      </Text>
                      <br />
                      <br />

                      <Heading as="h3" sx={styles.title}>
                        Desactivar las cookies.
                      </Heading>
                      <Text>
                      Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
                      <br />
                      En la mayoría de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar las cookies instaladas en su equipo.
                      <br />
                      A continuación puede acceder a la configuración de los navegadores webs más frecuentes para aceptar, instalar o desactivar las cookies:
                      <br />
                      <Link href="https://support.google.com/chrome/answer/95647?hl=es">- Configurar cookies en Google Chrome</Link>
                      <br />
                      <Link href="https://support.microsoft.com/es-es/windows?ui=es-ES&rs=es-ES&ad=ES">- Configurar cookies en Microsoft Internet Explorer</Link>
                      <br />
                      <Link href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we">- Configurar cookies en Mozilla Firefox</Link>
                      <br />
                      <Link href="https://support.apple.com/es-es/HT201265">- Configurar cookies en Safari (Apple)</Link>
                      <br />
                      </Text>
                      <br />
                      <br />
                      <Heading as="h3" sx={styles.title}>
                        Cookies de terceros.
                      </Heading>
                      <Text>
                      Esta página web utiliza servicios de terceros para recopilar información con fines estadísticos y de uso de la web. Se usan cookies de DoubleClick para mejorar la publicidad que se incluye en el sitio web. Son utilizadas para orientar la publicidad según el contenido que es relevante para un usuario, mejorando así la calidad de experiencia en el uso del mismo.
                      </Text>
                      <br />
                      <Text>
                      En concreto, usamos los servicios de Google Adsense y de Google Analytics para nuestras estadísticas y publicidad. Algunas cookies son esenciales para el funcionamiento del sitio, por ejemplo el buscador incorporado.
                      </Text>
                      <br />
                      <Text>
                      Nuestro sitio incluye otras funcionalidades proporcionadas por terceros. Usted puede fácilmente compartir el contenido en redes sociales como Facebook, Twitter o Google +, con los botones que hemos incluido a tal efecto.
                      </Text>
                      <br />
                      <br />
                      <Heading as="h3" sx={styles.title}>
                        Advertencia sobre eliminar cookies.
                      </Heading>
                      <Text>
                      Usted puede eliminar y bloquear todas las cookies de este sitio, pero parte del sitio no funcionará o la calidad de la página web puede verse afectada.
                      </Text>
                      Si tiene cualquier duda acerca de nuestra política de cookies, puede contactar con esta página web a través de nuestros canales de Contacto.
                      <br />
                      <br />
                    </Container>
                </section>
            </Layout>
        </StickyProvider>
    </ThemeProvider>
  );   
}


const styles = {
    banner: {
        pt: ['140px', '145px', '155px', '170px', null, null, '180px', '115px'],
        pb: [2, null, 0, null, 2, 0, null, 5],
        position: 'relative',
        zIndex: 2,
        '&::before': {
          position: 'absolute',
          content: '""',
          bottom: 6,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: -1,
        },
        '&::after': {
          position: 'absolute',
          content: '""',
          bottom: '40px',
          right: 0,
          height: '100%',
          width: '100%',
          zIndex: -1,
        },
        
        container: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: ['wrap', null, null, 'nowrap'],
        },
        
        contentBox: {
          flexShrink: 0,
    
          width: ['100%', 450, 550, '350px', '410px', '485px'],
          mx: 'auto',
          pb: ['0px', null, null, 0],
          '.description': {
            pr: [0, null, null, null, 4],
          },
        },
        imageBox: {
          display: ['block', null, null, 'block'],
          justifyContent: 'center',
          ml: ["50px", null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
          mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
          mt: ["-70px", null, null, '40px', 4, 7, 0],
          mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
          overflow: 'hidden',
          img: {
            position: 'relative',
            height: [245, 'auto'],
          },
          width: '100%',
        },
    },
};