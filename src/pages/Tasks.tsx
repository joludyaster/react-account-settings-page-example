import NavigationBar from "@components/account/NavigationBar";
import React from "react";

type TasksProps = {
    ref: React.RefObject<HTMLDivElement>;
};

const Tasks = React.forwardRef<HTMLDivElement, TasksProps>((props, ref) => {
    return (
        <>
            <NavigationBar ref={ref} />
            <div className="tasks__main">
                {/* This is where you forward the ref */}
                <div className="tasks__container container">
                    <main className="tasks__content">
                        <h3 className="tasks__title">Tasks</h3>
                        <p className="tasks__subtitle">
                            Welcome to your tasks page
                        </p>
                    </main>
                </div>
            </div>
            <div className="backdrop"></div>
        </>
    );
});

export default Tasks;
