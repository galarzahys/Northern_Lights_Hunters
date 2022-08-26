import '../styles/ExperienciasPage.css'


const VCNPage = (props) => {
        return (
            <div>
            <section>
                <article>
              <h2>¿Te animas a viajar con nosotros?</h2>
              <p>
                Northern Lights Hunters, organiza viajes grupales a diferentes puntos
                donde es posible observar auroras boreales, en una experiencia única
                que incluye actividades grupales donde sacarás a flote tu lado mas
                aventurero en busca de la magia tras las luces nórdicas.
              </p>
            </article>
            
          </section>
          <section className="images_vcn">
            <div className="imgcirc" id="imgcirc1"></div>
            <div className="imgcirc" id="imgcirc2"></div>
            <div className="imgcirc" id="imgcirc3"></div>
          </section>
          <hr />
          <section>
            <h2>¡Conocé las experiencias de personas que se animaron a hacerlo!</h2>
           
            <div className="travelers_experiences">
             
              <figure className="travelers_card">
                <img
                  className="imagen-testimonio"
                  src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/c2/e1/32.jpg"
                  alt="fotografia"
                />
                <figcaption className="contenedor-texto-testimonio">
                  <h3 className="nombre-testimonio">Chun-Li & Lachina del Supel</h3>
                  <p className="texto-testimonio">
                    "Fue una expeliencia inolvidable, nuestros amigos de Northern
                    Lights Hunters nos tlatalon supel bien"
                  </p>
                </figcaption>
              </figure>
             
              <figure className="travelers_card">
                <img
                  className="imagen-testimonio"
                  src="http://traveries.com/wp-content/uploads/2017/04/MG_4222-1024x683.jpg"
                  alt="fotografia"
                />
                <figcaption className="contenedor-texto-testimonio">
                  <h3 className="nombre-testimonio">Sandra</h3>
                  <p className="texto-testimonio">
                    "La pasé genial, los anfitriones se encargaron de hacerme sentir como en casa pero al mismo tiempo en un sueño"
                  </p>
                </figcaption>
              </figure>
      
              <figure className="travelers_card">
                <img
                  className="imagen-testimonio"
                  src="https://cdn.getyourguide.com/img/tour/603379d0afcc3.jpeg/98.jpg"
                  alt="fotografia"
                />
                <figcaption className="contenedor-texto-testimonio">
                  <h3 className="nombre-testimonio">John & Sarah Cornos</h3>
                  <p className="texto-testimonio">
                    "Todo excelente, mientras yo miraba las auroras boreales, Sarah junto a los anfitriones me aplaudian desde el dormitorio de la cabaña"
                  </p>
                </figcaption>
              </figure>
          
          </div>
      
          </section>
          <hr />
          <a href="contacto.html"><button type="button">Postulate!</button></a>
        </div>
        
        
    )
}

export default VCNPage;


