import React from 'react';
import './aboutus.css';

const AboutUs = () => {
    return (
        <div className="aboutus_container">
            <section className="aboutus_section fade_in">
                <h2>¿Quiénes Somos?</h2>
                <p>
                    La Universidad Nacional Federico Villareal logra impulsar
                    la innovación a través de la tecnología. Tenemos como enfoque llegar a nuestros estudiantes
                    para ofrecer experiencias únicas y accesibles.
                </p>
                <img src="https://www.susangreenecopywriter.com/wp-content/uploads/2013/01/photo-1518081461904-9d8f136351c2.jpg" className="aboutus_image" />
            </section>

            <section className="community_section fade_in">
                <h2>Nuestra Comunidad</h2>
                <p>
                    Como miembros orgullosos , trabajamos en colaboración para crear soluciones tecnológicas
                    que conecten el mundo real con el mundo digital. Creemos en el poder de la innovación para transformar
                    la educación, la comunicación y la vida diaria.
                </p>
                <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/243164670/original/c54f83a9cc2c62239e4699f737f7d8f0f5b0b626/write-one-to-multiple-pages-for-your-website-or-articles.jpg" alt="Nuestra universidad" className="aboutus_image" />
            </section>

            <section className="aboutus_project fade_in">
                <h2>Nuestro Proyecto</h2>
                <p>
                    Actualmente estamos desarrollando una página web de Realidad Aumentada que permitirá a los usuarios
                    interactuar con el entorno de forma dinámica y sorprendente.
                    ¡Acompáñanos en este viaje hacia el futuro!
                </p>
            </section>
        </div>
    );
};

export default AboutUs;
