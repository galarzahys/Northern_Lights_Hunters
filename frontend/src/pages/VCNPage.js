import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/Novedaditem';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect (() => {
      const cargarNovedades = async () => {
        setLoading (true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
        setNovedades(response.data);
        setLoading(false);
      };

      cargarNovedades();

    }, []);



  return (
    <section className="holder">
      <h2>Elegí el destino que quieras y programalo con nosotros</h2>
        {loading ? (
          <p>Cargando...</p>
        ) : (
            novedades.map(item => <NovedadItem key={item.id}
              title={item.titulo} subtitle={item.subtitulo}
              image={item.imagen} body={item.cuerpo} />)
        )}

    </section>
  );
};

export default NovedadesPage;
