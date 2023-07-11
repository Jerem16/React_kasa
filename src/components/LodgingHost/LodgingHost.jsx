import React from "react";
import StarRating from "../StarRating/StarRating";

const HostCard = ({ host, rating }) => {
    return (
        <article className="logement_host">
            <h2 className="logement_host-title">{host.name}</h2>
            <img
                src={host.picture}
                alt={host.name}
                className="logement_host-img"
            />

            <StarRating rating={rating} />
        </article>
    );
};
export default HostCard;
