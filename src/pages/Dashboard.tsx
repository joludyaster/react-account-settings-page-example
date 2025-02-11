import NavigationBar from "@components/account/NavigationBar";
import React from "react";

type DashboardProps = {
    ref: React.RefObject<HTMLDivElement>;
};

const Dashboard = React.forwardRef<HTMLDivElement, DashboardProps>(
    (props, ref) => {
        return (
            <>
                <NavigationBar ref={ref} />
                <div className="dashboard__main">
                    {" "}
                    {/* This is where you forward the ref */}
                    <div className="dashboard__container container">
                        <main className="dashboard__content">
                            <h3 className="dashboard__title">Dashboard</h3>
                            <p className="dashboard__subtitle">
                                Welcome to your dashboard page
                            </p>
                        </main>
                    </div>
                </div>
                <div className="backdrop"></div>
            </>
        );
    }
);

export default Dashboard;
