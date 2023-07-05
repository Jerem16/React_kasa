import React from "react";
import { useParams, Link } from "react-router-dom";
import accommodations from "../../data/logements.json";
import Error from "../../components/Error/Error";

function Logement() {
    const { id } = useParams();

    // Utilisez l'ID pour récupérer les détails du logement à partir de la liste `accommodations`
    const logement = accommodations.find(
        (accommodation) => accommodation.id === id
    );

    // Vérifiez si le logement existe
    if (!logement) {
        return <Error />;
    }

    // Affichez les détails du logement
    return (
        <div>
            <h2>Détails du logement {id}</h2>
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.description}</p>
            <p>Hôte : {logement.host.name}</p>
            <p>Note : {logement.rating}</p>
            {/* Affichez d'autres détails spécifiques du logement */}
            <Link to="/logement">Retour</Link>
        </div>
    );
}

export default Logement;
