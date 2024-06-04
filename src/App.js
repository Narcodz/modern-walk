import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Layout from "./components/Layout";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div>Loading ...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:category" element={<ProductPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
