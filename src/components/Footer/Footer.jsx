import logo from "../../img/logo/logo_kasa-blanc.svg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();
    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    const [footerStyle, setFooterStyle] = useState({});

    useEffect(() => {
        const handleResize = () => {
            const isFooterVisible =
                window.innerHeight >= document.body.offsetHeight;

            let footerStyle = {
                position: "absolute",
            };

            if (isFooterVisible) {
                switch (url) {
                    case "/":
                        break;

                    case "/a_propos":
                        footerStyle = {
                            ...footerStyle,
                            animation: "footerStart 1.75s ease-out forwards",
                        };
                        break;

                    default:
                        footerStyle = {
                            ...footerStyle,
                            animation:
                                "footerStartRentals 1.75s ease-out forwards",
                        };
                        break;
                }
            }

            setFooterStyle(footerStyle);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [url]);

    return (
        <footer key={url} style={footerStyle}>
            <div className="footer">
                <img src={logo} alt="logo" className="footer_logo" />
                <nav className="footer_nav">
                    <Link to="/" className="footer_nav-a">
                        &#169; 2020 Kasa. All right reserved
                    </Link>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
