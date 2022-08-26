import React from 'react';
import '../../styles/Novedad.css'

const NovedadItem = (props) => {
    const { title, subtitle, image, body } = props;

    return (
      <div> <a className="linkvcn" href='/contacto'>
        <div className="contenedor-novedad">
          <img className="imagen-novedad" src={image} alt={title} />
          <div className="contenedor-texto-novedad">
          <h2 className="titulo-novedad">{title}</h2>
          <h3>{subtitle}</h3>
          <div className="texto-novedad" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
      </a>
      </div>

    );
}

export default NovedadItem;