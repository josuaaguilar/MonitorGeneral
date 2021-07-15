import React , {Component} from 'react';
import Programacion from './Programacion';

class Solicitudes extends Component{
  render(){
    return <Programacion/>
  }
}
export default Solicitudes;
/*
  Este codigo funciona !!
  {
      if(this.state.show){
      return(
        <div>
          <h1>Valor Mercancia</h1>
          <div>
            //{<CRP CRPs = {this.state.CRPs}/> }
            <p>tst</p>
          </div>
          <button onClick={this.ToggleShow}>Ocultar</button>
        </div>
      );
    }else {
      return(
        <div>
          <h1>Not is showing</h1>
          <button onClick={this.ToggleShow}>Mostrar</button>
        </div>
      );
    }
  
  }
  */