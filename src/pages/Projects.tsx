import NavigationBar from "@components/account/NavigationBar";
import React from "react";

type ProjectsProps = {
    ref: React.RefObject<HTMLDivElement>;
};

const Projects = React.forwardRef<HTMLDivElement, ProjectsProps>(
    (props, ref) => {
        return (
            <>
                <NavigationBar ref={ref} />
                <div className="projects__main">
                    {/* This is where you forward the ref */}
                    <div className="projects__container container">
                        <main className="projects__content">
                            <h3 className="projects__title">Projects</h3>
                            <p className="projects__subtitle">
                                Welcome to your projects page
                            </p>
                        </main>
                    </div>
                </div>
                <div className="backdrop"></div>
            </>
        );
    }
);

export default Projects;
