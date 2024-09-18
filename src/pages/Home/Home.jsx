import React from "react";
import BannerImage from "../../components/BannerImage/BannerImage";
import HomeCardList from "../../components/HomeCardList/HomeCardList";
import useBodyClass from "../useBodyClass";
function Home() {
    useBodyClass("home");
    return (
        <div className="home">
            <BannerImage page="/" pageName="home" />
            <HomeCardList />
        </div>
    );
}

export default Home;
