import Busqueda from './Busquedas/Busquedas';
import Solicitudes from './Solicitudes/Solicitudes';
import Inventario from './Inventario/Inventario';
import Salidas from './Salida/Salidas';
import React , {Component} from 'react';
import Liberaciones from './Salida/Liberaciones';
import {BrowserRouter as Router,
    Route,
    Switch,
    Link,
    NavLink } from 'react-router-dom';

class MonitorGeneral extends Component{
    /* El constructor me sirve para inicializar el state. */
    constructor(props){
        super(props);
        this.state = {
            Visible : false,
            ApiResponse: ""
        }

    }
    handleClick(Visible){
        this.setState(
            {
                Visible:!Visible,
                Response: ""
            })
    }
    renderBusqueda(Nombre,Visible){
        return <Busqueda
        Nombre={Nombre} 
        Visible = {this.state.Visible} 
        onClick = {() => this.handleClick(Visible)}
        />
    }
    render(){
        return (
            
            <Router>
                <Link to={`/Solicitudes`}>
                   <ul>
                       <li>
                           Haz click para mostrar las solicitudes
                       </li>
                   </ul>
                </Link>
                <Link to={`/Busquedas`}>
                    <ul>
                        <li>
                            Haz click para mostrar las civilizaciones!!!
                        </li>
                    </ul>
                </Link>
                <Switch>
                    <Route path="/Busquedas/:id">
                        <Liberaciones/>
                    </Route>
                    <Route path="/Solicitudes">
                        <Liberaciones/> {/* este el bueno  */}
                    </Route>
                    <Route path="/Salida/Liberaciones:id">
                       <div>awa</div>
                    </Route>
                </Switch>
                <div className="MonitorGeneral">
                {/* Aqui esta el pan, hay que invocar la funcion y pasar los props
                Con el fin de mostrar los cambios en pantalla. */}
                <div className="BusquedaXBL">{this.renderBusqueda("BL / BOOKING",this.state.Visible)}</div>
                {/* <div>{this.renderBusqueda("MARCAS",this.state.Visible)}</div> */}
                
                <Inventario Visible = {this.state.Visible}/>
                <Salidas Visible = {this.state.Visible}/>
                

                </div>
            </Router>
        );
    }
}

export default MonitorGeneral;