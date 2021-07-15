import Busqueda from './Busquedas/Busquedas';
import Solicitudes from './Solicitudes/Solicitudes';
import Inventario from './Inventario/Inventario';
import Salidas from './Salida/Salidas';
import React , {Component} from 'react';

class MonitorGeneral extends Component{
    /* El constructor me sirve para inicializar el state. */
    constructor(props){
        super(props);
        this.state = {
            Visible : false
        }
    }
    handleClick(Visible){
        this.setState(
            {
                Visible:!Visible,

            })

    }
    renderBusqueda(Nombre,Visible){
        return <Busqueda
        Nombre={Nombre} 
        Visible = {this.state.Visible} 
        onClick = {() => this.handleClick(Visible)}/>
    }
    render(){
        return (
            <div>
            {/* Aqui esta el pan, hay que invocar la funcion y pasar los props
            Con el fin de mostrar los cambios en pantalla. */}
               <div>{this.renderBusqueda("BL / BOOKING",this.state.Visible)}</div>
               <div>{this.renderBusqueda("MARCAS",this.state.Visible)}</div>
               <Solicitudes Visible = {this.state.Visible}/>
               <Inventario Visible = {this.state.Visible}/>
               <Salidas Visible = {this.state.Visible}/>
            </div>
        );
    }
}

export default MonitorGeneral;