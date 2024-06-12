import { Link } from "react-router-dom";
export default function Work() {
  return (
    <div className="work">
      <div className="work_title">
        <h3>Links to my work</h3>
      </div>
      <div className="links">
        <Link to="/project-info">Crucial Clothing</Link>
        <Link to="/project-info">Photography</Link>
        <Link to="/project-info">Web Developer Portfolio</Link>
      </div>
    </div>
  );
}
