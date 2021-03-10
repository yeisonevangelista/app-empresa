import React from "react";
import loginImg from "../login.svg";
//import swal from "https://unpkg.com/sweetalert/dist/sweetalert.min.js";

//import Swal from 'sweetalert2/dist/sweetalert2.js'

import Swal from 'sweetalert2'

export class Login extends React.Component {
    constructor(props) {
        super(props);
       //this.state = { items: [], text: '' };
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);

        this.handleClick = this.handleClick.bind(this);

      /*  this.state = {
            error: null,
            isLoaded: false,
            items: []
          };*/
    }

    handleClick() {
       var user = document.getElementById('usuarios').value;
       var clave = document.getElementById('clave').value;

       if(user === "" && clave === ""){
           alert('complete los campos')
       }else{

        Swal.fire({type: "success",
                title: "¡Bien!",
                text: "Pasale",
                confirmButtonText: 'Cool',
                timer: 9000
            },
            );     
                
           // window.location = "index.php"
                
       }



        console.log('Se hizo click ' + user);
      }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Usuario</label>
                            <input type="text" name="usuario" id="usuarios" placeholder="ingrese su usuario"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="clave">Clave</label>
                            <input type="password" name="clave" id="clave" placeholder="ingrese su clave"></input>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn" onClick={this.handleClick}>Ingresar</button>
                </div>

            <script>

            </script>

            </div >
        );
    }




};

