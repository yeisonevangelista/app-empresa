import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import MediaControlCard from '../Section.js';


function About() {
  return (
    <>
      <div className='services'>
        <h1 class="tema-header">CONOCE</h1>
      </div>

      <br />
      <br />

      <div class="container">
        <h1>RECORDANDO EL AIR JORDAN VI "CARMINE"</h1>
        <div class="card-service">

          <p class="service-p">
            Volvamos al 1 de noviembre de 1991 en el Chicago Stadium. Fue una noche fría, sin embargo, el Madhouse en Madison era eléctrico con los aficionados locales celebrando su primer campeonato, asegurado cinco meses antes. Esa victoria se sintió como el paso de la antorcha, desde los equipos de los 80 hasta una posible nueva dinastía de Chicago. La ceremonia del anillo tuvo lugar justo antes del primer partido de la temporada regular del '91-'92, y Michael Jordan fue todo sonrisas como el locutor llamó a su nombre. El peso había sido levantado colectivamente de sus hombros y de toda la ciudad ventosa.</p>
            
          <p class="service-p">
            Después del discurso de su compañero de equipo, MJ tomó el micrófono: "Me da una gran alegría decir que somos los campeones del mundo", dijo. Con esas palabras, la multitud entró en un frenesí. Cuando la bandera del campeonato se elevó a las vigas, el rugido fue ensordecedor. Sabían que su equipo era capaz de ganar varios campeonatos, y tenían hambre de más.</p>

          <p class="service-p">
            En la noche de apertura, y para la primera mitad de la temporada '91-'92, MJ llevaba una nueva y afilada colorway del Air Jordan VI, una zapatilla a la que ahora nos referimos cariñosamente como la "Carmine". Inspirado por el amor de MJ por los coches deportivos alemanes, el Air Jordan VI tenía una lengua negra de goma y una lengüeta trasera de tacón "spoiler". La suela transparente y translúcida y la unidad Nike Air visible ayudaron al zapato a destacarse de todas las demás zapatillas de la cancha de baloncesto. Ganó ese primer campeonato en el black/infrared colorway.</p>

        </div>
      </div>

      <br />
      <br />

      <header class="bg-dark text-center py-5 mb-4">
        <div class="container">
          <h1 class="font-weight-light text-white">Marcas a conocer</h1>
        </div>
      </header>

      <div style={{ padding: 25 + 'px' }}>
        <MediaControlCard />
      </div>

      <br />
      <br />

      <Footer />
    </>
  );
}

export default About;