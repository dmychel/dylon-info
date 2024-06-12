import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "/src/routes/Index";
import CrucialClothing from "/src/routes/CrucialClothing";
import Photography from "/src/routes/Photography";
import Portfolio from "/src/routes/Portfolio";
import Error from "./routes/Error";

function App() {
  return (
    <BrowserRouter>
      <section className="app">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/crucialclothing" element={<CrucialClothing />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
