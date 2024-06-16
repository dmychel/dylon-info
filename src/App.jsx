import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "/src/routes/Index";
import Error from "./routes/Error";

function App() {
  return (
    <BrowserRouter>
      <section className="app">
        <header>
          <h1>Dylon Crowley-Perez</h1>
        </header>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
