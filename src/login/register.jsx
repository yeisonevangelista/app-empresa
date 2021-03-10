import React from "react";
import loginImg from "../login.svg";

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Registro</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Usuario</label>
                            <input type="text" name="usuario" placeholder="ingrese su usuario"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="correo">Correo</label>
                            <input type="email" name="correo" placeholder="ingrese su correo"></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="clave">Clave</label>
                            <input type="password" name="clave" placeholder="ingrese su clave"></input>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn">Registrar</button>
                </div>
            </div >
        );
    }
}