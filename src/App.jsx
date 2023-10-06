import "./index.css";
import "@fontsource/inter";
import { Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </>
  );
}
export { App };
