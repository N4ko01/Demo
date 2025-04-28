import React from "react";
import "./careerOptions.css";

const careers = [
    {
        name: "Informática",
        image: "https://saluddata.com/wp-content/uploads/2023/11/que-es-la-informatica.webp",
        path: "/scene_informatica.html"

    },
    {
        name: "Electrónica",
        image: "https://serviciostecnicosmovil.com/wp-content/uploads/2019/09/electronica.jpg",
        path: "/scene_electronica.html"


    },
    {
        name: "Telecomunicaciones",
        image: "https://www.osiptel.gob.pe/media/ozkdsiop/np-telecom.jpg",
        path: "/scene_telecomunicaciones.html"


    }
];

const CareerOptions = () => {
    return (
        <div className="careers">
            {careers.map((career, index) => (
                <a key={index} href={career.path} className="career_card">
                    <div className="career_image">
                        <img src={career.image} alt={career.name} />
                    </div>
                    <h2 className="career_text">{career.name}</h2>
                </a>
            ))}
        </div>
    );
};

export default CareerOptions;
