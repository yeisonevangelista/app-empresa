import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));


export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <h2 class="titulo">Jordan</h2>
          <div className='jordan-img'></div>
           {/* <Swipe/> */}
          <p class="service-p" style={{color: '#000'}}>Desde 1985, las zapatillas con el nombre de Michael Jordan y la silueta "Jumpman" de renombre mundial han ayudado a definir y dar forma a la cultura de las zapatillas. Comenzó con un calzado alto estándar de Nike y evolucionó con diseños atrevidos con cada iteración. Desde estampados gráficos hasta charol, aviones de combate y diseños inspirados en Ferrari, las zapatillas Jordan trascienden rutinariamente sus raíces en el baloncesto al renovar su oferta inicial con nuevos estilos y esquemas de color para seguir siendo relevantes para cada nueva generación.</p>
            <center>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<NavigationIcon />}
                href="https://air.jordan.com/"
              >
                Conocer
             </Button>
            </center>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <h2 class="titulo">Adidas</h2>
          <div className='adida-img'></div>
          <p class="service-p" style={{color: '#000'}}>El 18 de agosto de 1949, Adi Dassler fundó adidas con el deseo de ayudar a mejorar el rendimiento de los deportistas. Setenta años después, adidas no solo ha dejado huella en el deporte y en los atletas, sino también en la moda, la cultura, la sostenibilidad y en muchos otros ámbitos. Acompáñanos en un viaje en el tiempo y descubre la historia de adidas y los estilos que han influido en nuestras vidas hasta hoy.</p>
          <center>
              <Button
                variant="contained"
                color="error"
                className={classes.button}
                endIcon={<NavigationIcon />}
                href="https://www.adidas.com/us"
              >
                Conocer
             </Button>
            </center>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <h2 class="titulo">Nike</h2>
          <div className='nike-img'></div>
          <p class="service-p" style={{color: '#000'}}>Hoy en día Nike es una de las marcas más importantes de calzado deportivo, teniendo una presencia a nivel mundial; pero esto no siempre fue así, se necesitó de mucho esfuerzo y trabajo, a lo largo de varios años, para lograrlo. La historia de Nike se remonta a la década de los 50’s, cuando Phil Knight se interesó por los zapatos deportivos, convirtiéndose en distribuidor en Estados Unidos, de una marca japonesa</p>
          <center>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<NavigationIcon />}
                href="https://www.nike.com/"
              >
                Conocer
             </Button>
            </center>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}