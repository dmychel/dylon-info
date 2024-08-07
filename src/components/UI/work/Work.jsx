import Developer from "./Developer";
import CrucialClothing from "/src/components/UI/work/CrucialClothing";
import Photography from "/src/components/UI/work/Photography";

export default function Work() {
  return (
    <div className="work">
      <Developer />
      <Photography />
      <CrucialClothing />
    </div>
  );
}
