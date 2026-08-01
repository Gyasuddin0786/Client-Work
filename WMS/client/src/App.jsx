import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <FloatingWhatsApp />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;