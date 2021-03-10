import React from 'react';
import './Tarjeta.css';
import TarjetaArticulo from './TarjetaArticulo';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco',
    imgPath:
      'https://th.bing.com/th/id/OIF.1njja6DYiKwpfOFvQHqtIA?pid=ImgDet&rs=1',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.complex.com/complex/images/c_crop,h_601,w_1024,x_0,y_232/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/air-jordan-1-banned-charity-raffle_qgulp7/banned-air-jordan-1-charity-raffle',
  },
  {
    label: 'Indonesia',
    imgPath:
      'images/jordan-3.jpg',
  },
  {
    label: 'Las Vegas',
    imgPath:
      'images/jordan-4.jpg',
  },
  {
    label: 'Serbia',
    imgPath:
      'https://www.febbuy.com/uploads/Nike_Air_Jordan_Shoes/Air_Jordan_I_1_Shoes/Air_Jordan_I_High/Nike_Air_Jordan_I_1_Retro_High_Shoes_Sneaker_Basketball_Men_White_Navy_Blue.jpg',
  },
];

const segunda = [
  {
    label: 'Indonesia',
    imgPath:
      'images/nike-1.jpg',
  },
  {
    label: 'Serbia',
    imgPath:
      'images/nike-2.jpg',
  },
  {
    label: 'San Francisco',
    imgPath:
      'images/nike-3.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      'images/nike-4.jpg',
  },
  {
    label: 'Las Vegas',
    imgPath:
      'images/nike-6.jpg',
  },
];

const tercera = [
  {
    label: 'Las Vegas',
    imgPath:
      'https://th.bing.com/th/id/OIF.M7gkL3t3tnlVVr8I9I5CqA?pid=ImgDet&rs=1',
  },
  {
    label: 'Indonesia',
    imgPath:
      'https://th.bing.com/th/id/OIP.by3gUuLHvkCH7p8vWA4HMwHaEo?pid=ImgDet&w=1600&h=1000&rs=1',
  },
  {
    label: 'Serbia',
    imgPath:
      'https://th.bing.com/th/id/OIP.r4mDlV2CiD9ozrONwjjobQHaFH?pid=ImgDet&w=800&h=552&rs=1',
  },
  {
    label: 'San Francisco',
    imgPath:
      'https://th.bing.com/th/id/Rc029542ba5fb141eb7653725a8cf227e?rik=UZco297eKlHH3Q&riu=http%3a%2f%2fd26lpennugtm8s.cloudfront.net%2fstores%2f518%2f252%2fproducts%2fadidas-superstar-80-blanc-et-noir-31-71fc6437b6e95e911115238548058524-640-0.jpg&ehk=5OdfFWA1M3XhG5oCnedef%2f6dM1H3POn9gDMboSkSW8k%3d&risl=&pid=ImgRaw',
  },
  {
    label: 'Bird',
    imgPath:
      'https://www.yezshoes.com/uploads/Basketball/Adidas_James_Harden/Harden_Vol_2/Adidas_Harden_Vol_2_Men_Basketball_Shoes_White_Black_Red_New.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  
  },
}));

function Tarjeta(){

    
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
  
    //PRIMERA
    const maxSteps = tutorialSteps.length;
  
    //Comandos de seguimiento
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  

    return (
<>
        <div className="cards">
            <h1>¡Camina en estos destinos EPICOS!</h1>
             <div className="cards_container">
                 <div className="cards__wrapper">
                     <ul className="cards__items">
                         <TarjetaArticulo
                         src="images/jordan-hyde.jpg" 
                         text="Explora la cascada oculta en las profundidades del estilo."
                         label="Aventura ( Jordan Air 1 )"
                         path="/about"
                         />
                          <TarjetaArticulo
                         src="images/jock-mark.jpg" 
                         text="Viaja por las islas del estilo en un crucero de flow"
                         label="Luxury"
                         path="/about"
                         />
                     </ul>
                    <ul className='cards__items'>
                        <TarjetaArticulo
                            src='images/lebron.jpg'
                            text='Zarpea en las raizes de tu estilo'
                            label='Aventura'
                            path='/about'
                        />
                        <TarjetaArticulo
                            src='images/erik-mclean.jpg'
                            text='Experimente la diversidad del estilo'
                            label='Misterio'
                            path='/about'
                        />
                    </ul>
                 </div>
             </div>
        </div>

        <header class="bg-dark text-center py-5">
          <h1 class="font-weight-light text-white">¡Observa el paraiso en tus pies!</h1>
      </header>

      <div className="cards">
        <div className="cards_container">
          <div className="cards__wrapper" style={{marginTop: 0 + 'PX'}}>
            <ul className="cards__items">

            <li className='cards__item'>
                <div className={classes.root}>
                  <Paper square elevation={0} className={classes.header}>
                   <center><h3>Jordan</h3></center>
                  </Paper>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                  >
                    {tutorialSteps.map((step, index) => (
                      <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                          <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                </div>
              </li>

              <li className='cards__item'>
                <div className={classes.root}>
                  <Paper square elevation={0} className={classes.header}>
                    <h3>Nike</h3>
                  </Paper>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                  >
                    {segunda.map((step, index) => (
                      <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                          <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                  <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                      <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                      </Button>
                    }
                    backButton={
                      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
                    }
                  />
                </div>
              </li>

              <li className='cards__item'>
                <div className={classes.root}>
                  <Paper square elevation={0} className={classes.header}>
                   <h3>Adidas</h3>
                  </Paper>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                  >
                    {tercera.map((step, index) => (
                      <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                          <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                
                </div>
              </li>
            
            </ul>

          </div>
        </div>
      </div>        
</>
    );
}

export default Tarjeta;