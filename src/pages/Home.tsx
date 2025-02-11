import NavigationBar from "@components/account/NavigationBar";
import React from "react";

type HomeProps = {
    ref: React.RefObject<HTMLDivElement>;
};

const Home = React.forwardRef<HTMLDivElement, HomeProps>((props, ref) => {
    return (
        <>
            <NavigationBar ref={ref} />
            <div className="home__main">
                <div className="home__container container">
                    <main className="home__content">
                        <h3 className="home__title">Home</h3>
                        <p className="home__subtitle">
                            Welcome to your home page
                        </p>
                    </main>
                </div>
            </div>
            <div className="backdrop"></div>
        </>
    );
});

export default Home;
