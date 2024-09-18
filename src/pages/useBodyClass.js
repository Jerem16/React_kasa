import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useBodyClass = (className) => {
    const location = useLocation();

    // Effet pour ajouter ou retirer la classe basée sur la route
    useEffect(() => {
        const body = document.body;

        if (location.pathname === "/") {
            body.classList.add(className);
        } else {
            body.classList.remove(className);
        }

        // Nettoyage pour retirer la classe quand le composant se démonte ou la route change
        return () => {
            body.classList.remove(className);
        };
    }, [location.pathname, className]);

    // Effet pour ajouter la classe "intro" lors du changement de pathname
    useEffect(() => {
        const body = document.body;

        // Ajouter la classe
        body.classList.add("intro");

        // Supprimer la classe après 2 secondes
        const timer = setTimeout(() => {
            body.classList.remove("intro");
        }, 900); // 2000 ms = 2 s

        // Nettoyage pour retirer la classe et effacer le timer
        return () => {
            clearTimeout(timer);
            body.classList.remove("intro");
        };
    }, [location.pathname, "intro"]);
};

export default useBodyClass;
