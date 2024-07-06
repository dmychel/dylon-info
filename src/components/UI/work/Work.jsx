import Developer from "./Developer";
import CrucialClothing from "/src/components/UI/work/CrucialClothing";
import Photography from "/src/components/UI/work/Photography";
import Portfolio from "/src/components/UI/work/Portfolio";

export default function Work() {
  return (
    <div className="work">
      <CrucialClothing />
      <Photography />
      <Portfolio />
      <Developer />
    </div>
  );
}
