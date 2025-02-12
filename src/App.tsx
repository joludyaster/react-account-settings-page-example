import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "@pages/account/Account";
import { AvatarProvider } from "@src/providers/AvatarProvider";
import { ToastContainer, Slide } from "react-toastify";

function App() {
    return (
        <BrowserRouter
            future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}>
            <AvatarProvider>
                <Routes>
                    <Route path="/account/*" element={<Account />} />
                </Routes>
            </AvatarProvider>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                stacked
                draggable
                pauseOnHover
                closeButton={false}
                theme="dark"
                transition={Slide}
            />
        </BrowserRouter>
    );
}

export default App;
