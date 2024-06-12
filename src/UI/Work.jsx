import { Link } from "react-router-dom";
export default function Work() {
  return (
    <div className="work">
      <div className="work_title">
        <h3>Links to my work</h3>
      </div>
      <div className="links">
        <Link to="/crucialclothing">Crucial Clothing</Link>
        <Link to="/photography">Photography</Link>
        <Link to="/portfolio">Web Developer Portfolio</Link>
      </div>
    </div>
  );
}
