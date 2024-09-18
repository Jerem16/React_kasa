import BannerImage from "../../components/BannerImage/BannerImage";
import Collapse from "../../components/Collapse/Collapse";
import Data from "../../data/kasa.json";
import useBodyClass from "../useBodyClass";

function About() {
    useBodyClass("home");
    return (
        <div>
            <BannerImage
                page="about"
                pageName="about"
                bannerID="about-bannerImage"
            />
            <div className="about_collapse-layout">
                {Data.map((item, index) => (
                    <Collapse
                        key={[index]}
                        className="about_collapse"
                        title={item.title}
                        content={item.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default About;
