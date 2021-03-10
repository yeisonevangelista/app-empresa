import React from 'react'
import './Tarjetatwo.css';
import TarjetaArticulo from './TarjetaArticulo';
import { Button } from './Botones';
import { Link } from 'react-router-dom';



function Tarjetatwo(){
  return (
    <>

      <div className="cards">
        <h1>¡Observa el paraiso en tus pies!</h1>
        <div className="cards_container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <TarjetaArticulo
                src="images/jordan-hyde.jpg"
                text="Explora la cascada oculta en las profundidades del estilo."
                label="Jordan Air 1x"
                path='/sign-up'
              />
              <TarjetaArticulo
                src="images/jordan-4.jpg"
                text="Viaja por las islas del estilo en un crucero de flow"
                label="Jordan Air 1 Fusión"
                path='/sign-up'
              />
              <TarjetaArticulo
                src='images/arthur-ogleznev.jpg'
                text='Recorre el destino estrellado del mundo'
                label='Jordan Air 1'
                path='/sign-up'
              />
            </ul>
            <ul className='cards__items'>
              <TarjetaArticulo
                src='images/van-nike.jpg'
                text='Zarpe en el Destino con estilo y furia'
                label='Nike-Lebron'
                path='/sign-up'
              />
              <TarjetaArticulo
                src='images/retro-2.jpg'
                text='Experimente la diversidad del estilo'
                label='Jordan-Retro'
                path='/sign-up'
              />
              <TarjetaArticulo
                src='images/futuro.jpg'
                text='Camina por el destino estrellado del futuro'
                label='Nike-Future'
                path='/sign-up'
              />
            </ul>
            <ul className='cards__items'>

              <TarjetaArticulo
                src='images/ox-stre.jpg'
                text='Combina tus sentimientos con tu esencia'
                label='Jordan'
                path='/sign-up'
              />
              <TarjetaArticulo
                src='images/nike-5.jpg'
                text='Experimente la belleza del estilo'
                label='Nike'
                path='/sign-up'
              />
              <TarjetaArticulo
                src='images/balen.jpg'
                text='Paseo por el destino tropical del flow'
                label='Dolce & Gabbana'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>

      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Ofertas</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <i class="fas fa-burn fa-xs" style={{ fontSize: 30 + "px" }}></i>
                </div>
                <h3>Básico</h3>
                <h4>$80.99</h4>
                <p>por mes</p>
                <ul className='pricing__container-features'>
                  <li>5 paquetes</li>
                  <li>20% Descuento</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Elegir plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <i class="fas fa-fire fa-xs" style={{ fontSize: 30 + "px" }}></i>
                </div>
                <h3>Gold</h3>
                <h4>$290.99</h4>
                <p>por mes</p>
                <ul className='pricing__container-features'>
                  <li>10 paquetes</li>
                  <li>35% Descuento</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Elegir plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <i class="fas fa-fire-alt fa-xs" style={{ fontSize: 30 + "px" }}></i>
                </div>
                <h3>Diamond</h3>
                <h4>$990.99</h4>
                <p>por mes</p>
                <ul className='pricing__container-features'>
                  <li>15 paquetes</li>
                  <li>50% Descuento</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Elegir plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}

export default Tarjetatwo;
