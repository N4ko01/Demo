import React from 'react'
import "./homepage.css"
import { useState, useEffect, useRef } from 'react';

const HomePage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });


    const [opacityInfo1, setOpacityInfo1] = useState(0.5);
    const [opacityInfo2, setOpacityInfo2] = useState(0.5);
    const [opacityInfo3, setOpacityInfo3] = useState(0.5);



    const info1Ref = useRef();
    const info2Ref = useRef();
    const info3Ref = useRef();


    const handleChange = (e) => {
        setFormData(prev => (
            {
                ...prev,
                [e.target.name]: e.target.value,
            }
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData));
        setFormData({ name: '', email: '', message: '' });
    };

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            if (entry.target === info1Ref.current) {
                                setOpacityInfo1(1);
                            }
                            if (entry.target === info2Ref.current) {
                                setOpacityInfo2(1);
                            }
                            if (entry.target === info3Ref.current) {
                                setOpacityInfo3(1);
                            }
                        } else {

                            if (entry.target === info1Ref.current) {
                                setOpacityInfo1(0.5);
                            }
                            if (entry.target === info2Ref.current) {
                                setOpacityInfo2(0.5);
                            }
                            if (entry.target === info3Ref.current) {
                                setOpacityInfo3(0.5);
                            }
                        }
                    });
            },
            {
                threshold: 0.5,
            }
        );


        observer.observe(info1Ref.current);
        observer.observe(info2Ref.current);
        observer.observe(info3Ref.current);


    }, []);


    return (
        <>
            <div className='DataContainers'>
                <div
                    className="info1"
                    ref={info1Ref}
                    style={{ opacity: opacityInfo1, transition: 'opacity 1s ease' }}>

                    <div className="info1__text">
                        <h1>
                            REALIDAD AUMENTADA
                        </h1>

                        <p>
                            Se presenta la realidad aumentada como una herramienta innovadora para enriquecer el aprendizaje y la interacción en el campus.
                        </p>

                    </div>
                    <div className="info1__imgReference">

                    </div>
                </div>

                <div
                    className="info2"
                    ref={info2Ref}
                    style={{ opacity: opacityInfo2, transition: 'opacity 1s ease' }}>

                    <div className="info2__imgReference">
                    </div>
                    <div className="info2__text">
                        <h1>
                            EXPERIENCIA INMERSIVA
                        </h1>

                        <p>
                            Con la implementación de AR, la universidad transforma la educación, brindando nuevas formas de explorar contenidos.
                        </p>

                    </div>
                </div>

                <div
                    className='info3'
                    ref={info3Ref}
                    style={{ opacity: opacityInfo3, transition: 'opacity 1s ease' }}>
                    <h1 className="containerbenefits__title">BENEFICIOS</h1>

                    <div className="containerbenefit__skills">
                        <div className="skills">
                            <div className="containerskills__number">
                                <span className="material-symbols-outlined icon">
                                    receipt_long
                                </span>
                            </div>
                            <div className="containerskills__text">
                                <p>
                                    Facilita la interacción con contenido visual y tridimensional.
                                </p>
                            </div>
                        </div>

                        <div className="skills">
                            <div className="containerskills__number">
                                <span className="material-symbols-outlined icon">school</span>
                            </div>
                            <div className="containerskills__text">
                                <p>
                                    Visualiza conceptos abstractos de manera tangible.
                                </p>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="containerskills__number">
                                <span className="material-symbols-outlined icon">
                                    manage_accounts
                                </span>
                            </div>
                            <div className="containerskills__text">
                                <p>
                                    Crea experiencias educativas más atractivas.
                                </p>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="containerskills__number">
                                <span className="material-symbols-outlined icon">feedback</span>
                            </div>
                            <div className="containerskills__text">
                                <p>
                                    Recrea escenarios complejos de forma segura.
                                </p>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="containerskills__number">
                                <span className="material-symbols-outlined icon">
                                    calendar_month
                                </span>
                            </div>
                            <div className="containerskills__text">
                                <p>
                                    Accede a datos adicionales instantáneamente.
                                </p>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="containerskills__number">
                                <span className="material-symbols-outlined icon">
                                    web_traffic
                                </span>
                            </div>
                            <div className="containerskills__text">
                                <p>
                                    Fomenta el trabajo en equipo mediante entornos compartidos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="formContainer">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Contactanos</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Mensaje"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Guardar</button>
                </form>

                <div className="formImage">
                    <img src="https://ligacancercesar.org/wp-content/uploads/2023/05/solidaridad.png" />
                </div>
            </div>
        </>
    )
}

export default HomePage