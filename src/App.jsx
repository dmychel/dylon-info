import Contact from "./UI/Contact";
import Intro from "./UI/Intro";
import Profile from "./UI/Profile";
import Work from "./UI/Work";

function App() {
  return (
    <section className="app">
      <Profile />
      <Intro />
      <Work />
      <Contact />
    </section>
  );
}

export default App;
