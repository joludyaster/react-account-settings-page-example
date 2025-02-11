import NavigationBar from "@components/account/NavigationBar";
import React from "react";

type ReportingProps = {
    ref: React.RefObject<HTMLDivElement>;
};

const Reporting = React.forwardRef<HTMLDivElement, ReportingProps>(
    (props, ref) => {
        return (
            <>
                <NavigationBar ref={ref} />
                <div className="reporting__main">
                    {/* This is where you forward the ref */}
                    <div className="reporting__container container">
                        <main className="reporting__content">
                            <h3 className="reporting__title">Reporting</h3>
                            <p className="reporting__subtitle">
                                Welcome to your reporting page
                            </p>
                        </main>
                    </div>
                </div>
                <div className="backdrop"></div>
            </>
        );
    }
);

export default Reporting;
