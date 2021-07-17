import React from 'react';
import { useParams } from 'react-router-dom';
const Liberaciones = () => {
    
    console.log(useParams());
    return(
        <div className="Liberaciones">
        Im in Liberaciones
        </div>

    );
}

export default Liberaciones;