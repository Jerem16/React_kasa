import React, { useState } from "react";

const Collapse = ({ title, content, className, onTransition }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const toggleCollapse = () => {
        setIsTransitioning(true);

        setTimeout(() => {
            setIsCollapsed(!isCollapsed);
            setIsTransitioning(false);

            if (onTransition) {
                onTransition(!isCollapsed);
            }
        });
    };

    const collapseClass = isCollapsed ? "closed" : "opened";

    return (
        <article className={className}>
            <h4
                onClick={toggleCollapse}
                className={`collapse ${
                    isTransitioning ? "transitioning" : ""
                } ${collapseClass}`}
            >
                {title}
                <i
                    className={`fas fa-chevron-up ${
                        isTransitioning ? "rotate" : ""
                    }`}
                    style={{
                        transformOrigin: " center",
                        transform: `rotate(${
                            isCollapsed ? "0deg" : "-180deg"
                        })`,
                        transition: "all 0.3s ease-in-out",
                    }}
                ></i>
            </h4>
            <div
                className={`collapse-content ${
                    isTransitioning ? "transitioning" : ""
                } ${collapseClass}`}
                style={{
                    maxHeight: isCollapsed ? "0" : "1000px",
                    transform: `scaleY(${isCollapsed ? 0 : 1})`,
                    transformOrigin: "top",
                    transition: "all 0.3s ease-in-out",
                }}
            >
                {content}
            </div>
        </article>
    );
};

export default Collapse;
